

import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import Solutions from "@/components/sections/Solutions";
import {Process} from "@/components/sections/Process";
import {WhyMdtecode} from "@/components/sections/WhyMdtecode";




export default function HomePage() {
  return (
    <main>
      
      <Hero />
      <Solutions/>
      <Projects/>
      <Process/>
      <WhyMdtecode/>
      
      
    </main>
  );
}
