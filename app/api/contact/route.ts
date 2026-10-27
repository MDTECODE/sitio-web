import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
  prefix: "contact-form",
});

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  reason: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  turnstileToken: z.string().min(1),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyTurnstile(token: string, ip?: string) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    }
  );

  const data = await response.json();
  return data.success === true;
}

function getIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return realIp || "unknown";
}

function adminEmailTemplate(data: {
  name: string;
  email: string;
  company?: string;
  reason?: string;
  message: string;
}) {
  return `
    <div style="margin:0;padding:0;background:#0A0F1E;font-family:Arial,sans-serif;color:#111827;">
      <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border-radius:18px;padding:28px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 10px;color:#f97316;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
            Nuevo lead desde MDTECODE
          </p>

          <h1 style="margin:0 0 20px;font-size:26px;line-height:1.3;color:#111827;">
            ${escapeHtml(data.name)} quiere contactarte
          </h1>

          <div style="background:#f9fafb;border-radius:14px;padding:18px;margin-bottom:20px;">
            <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Empresa:</strong> ${escapeHtml(data.company || "No especificada")}</p>
            <p><strong>Motivo:</strong> ${escapeHtml(data.reason || "No especificado")}</p>
          </div>

          <h2 style="font-size:18px;color:#111827;">Mensaje</h2>

          <div style="background:#f3f4f6;border-radius:14px;padding:18px;color:#374151;line-height:1.6;">
            ${escapeHtml(data.message).replaceAll("\n", "<br />")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function autoReplyTemplate(data: { name: string }) {
  return `
    <div style="margin:0;padding:0;background:#0A0F1E;font-family:Arial,sans-serif;color:#111827;">
      <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border-radius:18px;padding:28px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 10px;color:#f97316;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
            MDTECODE
          </p>

          <h1 style="margin:0 0 16px;font-size:26px;line-height:1.3;color:#111827;">
            Recibimos tu mensaje, ${escapeHtml(data.name)}
          </h1>

          <p style="font-size:16px;line-height:1.7;color:#374151;">
            Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderá en menos de 24 horas hábiles.
          </p>

          <div style="background:#f9fafb;border-radius:14px;padding:18px;margin:24px 0;color:#374151;">
            <strong>¿Qué sigue?</strong>
            <p style="margin-bottom:0;">
              Analizaremos tu proyecto, necesidad o idea para responderte con una orientación clara y útil.
            </p>
          </div>

          <p style="font-size:14px;color:#6b7280;">
            Este correo fue enviado automáticamente. Puedes responder este mensaje si quieres agregar más información.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Demasiados intentos. Intenta de nuevo más tarde." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const { name, email, company, reason, message, turnstileToken } =
      result.data;

    const isHuman = await verifyTurnstile(turnstileToken, ip);

    if (!isHuman) {
      return NextResponse.json(
        { error: "Verificación anti spam inválida" },
        { status: 403 }
      );
    }

    await resend.emails.send({
      from: "MDTECODE <noreply@mdtecode.com>",
      to: "soporte@mdtecode.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html: adminEmailTemplate({
        name,
        email,
        company,
        reason,
        message,
      }),
    });

    await resend.emails.send({
      from: "MDTECODE <noreply@mdtecode.com>",
      to: email,
      replyTo: "soporte@mdtecode.com",
      subject: "Recibimos tu mensaje en MDTECODE",
      html: autoReplyTemplate({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error enviando correo" },
      { status: 500 }
    );
  }
}