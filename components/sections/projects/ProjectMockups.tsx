import { Activity, ArrowUpRight, Bell, CalendarDays, Check, ChevronDown, CircleHelp, Database, FileText, GitBranch, LayoutDashboard, Mail, MoreHorizontal, Plus, Search, Settings, ShieldCheck, SlidersHorizontal, Users, Workflow, Zap } from 'lucide-react'

const styles: Record<string, string> = new Proxy({}, { get: (_, property) => String(property) })

export function ClinicalDashboardMockup() {
  return (
    <div className={styles.clinicalScene} aria-hidden="true">
      <div className={styles.dashboard}>
        <aside className={styles.dashSidebar}>
          <div className={styles.clinicBrand}><span><Plus size={17} /></span> clinica<span className={styles.brandDot}>.</span></div>
          <div className={styles.workspace}><span>C</span><div>Clínica Central<small>Espacio de trabajo</small></div><ChevronDown size={10} /></div>
          <small className={styles.menuLabel}>PRINCIPAL</small>
          <div className={styles.dashNav}>
            <span className={styles.dashNavActive}><LayoutDashboard /> Resumen</span>
            <span><Users /> Pacientes</span><span><CalendarDays /> Citas <i>8</i></span>
            <span><FileText /> Facturación</span><span><Activity /> Reportes</span>
          </div>
          <div className={styles.sidebarBottom}><span><Settings /> Configuración</span><span><CircleHelp /> Centro de ayuda</span><div className={styles.doctor}><b>AM</b><div>Dra. Ana Martínez<small>Administradora</small></div></div></div>
        </aside>
        <div className={styles.dashMain}>
          <div className={styles.dashTopbar}><span>Panel de control</span><div><Search size={11} /><span>Buscar...</span><Bell size={11} /><b>AM</b></div></div>
          <div className={styles.dashContent}>
            <div className={styles.dashHeading}><div><h4>Resumen general</h4><p>Un nuevo día para cuidar mejor.</p></div><span><CalendarDays size={10} /> 12 jun, 2026</span></div>
            <div className={styles.stats}>
              <div><span>Pacientes <Users /></span><strong>1,248</strong><small>+12.8% <em>este mes</em></small></div>
              <div><span>Citas de hoy <CalendarDays /></span><strong>32</strong><small>+8.2% <em>esta semana</em></small></div>
              <div><span>Ingresos <Activity /></span><strong>$24,580</strong><small>+16.4% <em>este mes</em></small></div>
            </div>
            <div className={styles.dashCharts}>
              <div className={styles.chartPanel}><div className={styles.panelTitle}>Actividad semanal <span>Esta semana <ChevronDown size={9} /></span></div><div className={styles.barChart}>{[40, 64, 51, 83, 70, 93, 58].map((height, i) => <div key={i}><div className={styles.barPair}><i style={{ height: `${height}%` }} /><i style={{ height: `${height * .65}%` }} /></div><small>{['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'][i]}</small></div>)}</div><div className={styles.chartLegend}><span>Consultas</span><span>Seguimientos</span></div></div>
              <div className={styles.chartPanel}><div className={styles.panelTitle}>Tipos de consulta</div><div className={styles.donut}><div><strong>248</strong><small>Consultas</small></div></div><div className={styles.donutLegend}><span>General <b>58%</b></span><span>Especialidad <b>28%</b></span><span>Control <b>14%</b></span></div></div>
            </div>
            <div className={styles.appointments}><div className={styles.panelTitle}>Próximas citas <span>Ver todas <ArrowUpRight size={9} /></span></div><div className={styles.tableHeader}><span>Paciente</span><span>Especialidad</span><span>Hora</span><span>Estado</span></div>{[['LS', 'Laura Sánchez', 'Medicina general', '09:30'], ['CR', 'Carlos Ramírez', 'Cardiología', '10:00'], ['MG', 'María García', 'Dermatología', '10:30']].map(([initials,name,specialty,time]) => <div className={styles.tableRow} key={initials}><span><b>{initials}</b>{name}</span><span>{specialty}</span><span>{time}</span><span><i /> Confirmada</span></div>)}</div>
            <div className={styles.demoCaption}>ENTORNO DE DEMOSTRACIÓN · DATOS FICTICIOS</div>
          </div>
        </div>
      </div>
      <div className={styles.floatingNote}><span><ShieldCheck size={17} /></span><div>Todo conectado.<small>Una gestión más simple.</small></div><Check size={13} /></div>
    </div>
  )
}

export function CorporateWebsiteMockup() {
  return (
    <div className={styles.corporateScene} aria-hidden="true">
      <div className={styles.browserWindow}>
        <div className={styles.browserBar}><span><i /><i /><i /></span><div><ShieldCheck size={8} /> vista previa · concepto</div><Plus size={10} /></div>
        <div className={styles.corporateNav}><b><GitBranch size={13} /> nexora<span>.</span></b><div>Servicios <span>Nosotros</span> <span>Contacto</span></div><span>Hablemos <ArrowUpRight size={8} /></span></div>
        <div className={styles.corporateHero}><div><small>ESTRATEGIA. DISEÑO. TECNOLOGÍA.</small><h4>El siguiente paso<br />de tu negocio<span> empieza aquí.</span></h4><p>Transformamos ideas en experiencias<br />que conectan con lo que sigue.</p><span className={styles.fakeCta}>Descubre nuestras soluciones <ArrowUpRight size={9} /></span></div><div className={styles.orbitArt}><i /><i /><i /><div><GitBranch size={30} /></div><span>Conecta con el futuro</span></div></div>
        <div className={styles.corporateBottom}><span>Ideas con propósito.</span><span>Diseño sin límites.</span><span>Tecnología que impulsa.</span></div>
      </div>
    </div>
  )
}

export function AutomationMockup() {
  return (
    <div className={styles.automationScene} aria-hidden="true">
      <div className={styles.automationTop}><span><Workflow size={12} /> Flujo de operaciones <ChevronDown size={10} /></span><span><i /> Demostración <MoreHorizontal size={15} /></span></div>
      <div className={styles.flow}>
        <div className={styles.flowNode}><div className={styles.nodeIcon}><Zap size={18} /></div><strong>Nueva solicitud</strong><small>Disparador</small><span><Check size={8} /> Completado</span></div>
        <div className={styles.connector}><i /></div>
        <div className={styles.flowNode}><div className={styles.nodeIcon}><SlidersHorizontal size={18} /></div><strong>Procesar datos</strong><small>Transformación</small><span><Check size={8} /> Completado</span></div>
        <div className={styles.branchConnector} />
        <div className={styles.flowOutputs}><div><Mail size={13} /><span>Enviar notificación<small>Correo electrónico</small></span><Check size={9} /></div><div><Database size={13} /><span>Guardar registro<small>Base de datos</small></span><Check size={9} /></div></div>
      </div>
      <div className={styles.automationBottom}><span><i /> Flujo de ejemplo</span><span>3 pasos <b>·</b> 2 integraciones</span></div>
    </div>
  )
}
