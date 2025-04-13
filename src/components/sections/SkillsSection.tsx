
import { useState } from "react";
import TerminalWindow from "../TerminalWindow";
import SkillBar from "../SkillBar";
import HexSkill from "../HexSkill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Shield,
  Database,
  Server,
  Layout,
  Terminal,
  Workflow,
  Cpu
} from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-neon-green">{'{'}</span>
          <span className="text-white"> Technical Skills </span>
          <span className="text-neon-green">{'}'}</span>
        </h2>
        
        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8 bg-black/30">
            <TabsTrigger value="technical" className="font-mono data-[state=active]:text-neon-green">
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="certifications" className="font-mono data-[state=active]:text-neon-green">
              Certifications
            </TabsTrigger>
            <TabsTrigger value="tools" className="font-mono data-[state=active]:text-neon-green">
              Tools & Technologies
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TerminalWindow title="frontend.sh">
                <div className="space-y-4">
                  <SkillBar name="JavaScript/TypeScript" percent={95} delay={100} />
                  <SkillBar name="React & React Native" percent={90} delay={200} />
                  <SkillBar name="Vue.js" percent={85} delay={300} />
                  <SkillBar name="HTML5/CSS3/SASS" percent={92} delay={400} />
                  <SkillBar name="UI/UX Design" percent={80} delay={500} />
                </div>
              </TerminalWindow>
              
              <TerminalWindow title="backend.sh">
                <div className="space-y-4">
                  <SkillBar name="Node.js" percent={92} delay={100} color="from-electric-blue to-neon-green" />
                  <SkillBar name="Python" percent={88} delay={200} color="from-electric-blue to-neon-green" />
                  <SkillBar name="C/C++" percent={75} delay={300} color="from-electric-blue to-neon-green" />
                  <SkillBar name="PostgreSQL/MongoDB" percent={85} delay={400} color="from-electric-blue to-neon-green" />
                  <SkillBar name="AWS/Azure" percent={78} delay={500} color="from-electric-blue to-neon-green" />
                </div>
              </TerminalWindow>
              
              <TerminalWindow title="security.sh" className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <SkillBar name="Penetration Testing" percent={94} delay={100} color="from-red-500 to-orange-400" />
                    <SkillBar name="Network Security" percent={88} delay={200} color="from-red-500 to-orange-400" />
                    <SkillBar name="Security Auditing" percent={90} delay={300} color="from-red-500 to-orange-400" />
                  </div>
                  <div className="space-y-4">
                    <SkillBar name="Cryptography" percent={82} delay={100} color="from-red-500 to-orange-400" />
                    <SkillBar name="Malware Analysis" percent={78} delay={200} color="from-red-500 to-orange-400" />
                    <SkillBar name="Incident Response" percent={85} delay={300} color="from-red-500 to-orange-400" />
                  </div>
                </div>
              </TerminalWindow>
            </div>
          </TabsContent>
          
          <TabsContent value="certifications">
            <TerminalWindow title="certifications.log">
              <div className="space-y-6">
                <div className="border-l-2 border-neon-green pl-4 py-2">
                  <h3 className="font-mono text-lg text-neon-green mb-1">CISSP - Certified Information Systems Security Professional</h3>
                  <p className="text-sm text-foreground/70">ISC² - 2019</p>
                </div>
                
                <div className="border-l-2 border-neon-green pl-4 py-2">
                  <h3 className="font-mono text-lg text-neon-green mb-1">OSCP - Offensive Security Certified Professional</h3>
                  <p className="text-sm text-foreground/70">Offensive Security - 2018</p>
                </div>
                
                <div className="border-l-2 border-neon-green pl-4 py-2">
                  <h3 className="font-mono text-lg text-neon-green mb-1">AWS Certified Security - Specialty</h3>
                  <p className="text-sm text-foreground/70">Amazon Web Services - 2020</p>
                </div>
                
                <div className="border-l-2 border-neon-green pl-4 py-2">
                  <h3 className="font-mono text-lg text-neon-green mb-1">Certified Ethical Hacker (CEH)</h3>
                  <p className="text-sm text-foreground/70">EC-Council - 2017</p>
                </div>
              </div>
            </TerminalWindow>
          </TabsContent>
          
          <TabsContent value="tools">
            <TerminalWindow title="tools.json">
              <div className="hex-grid py-4">
                <HexSkill skill="React" icon={<Code className="text-electric-blue" />} />
                <HexSkill skill="Node.js" icon={<Server className="text-electric-blue" />} />
                <HexSkill skill="Python" icon={<Code className="text-electric-blue" />} />
                <HexSkill skill="Kali Linux" icon={<Terminal className="text-electric-blue" />} />
                <HexSkill skill="Burp Suite" icon={<Shield className="text-electric-blue" />} />
                <HexSkill skill="Docker" icon={<Workflow className="text-electric-blue" />} />
                <HexSkill skill="PostgreSQL" icon={<Database className="text-electric-blue" />} />
                <HexSkill skill="MongoDB" icon={<Database className="text-electric-blue" />} />
                <HexSkill skill="AWS" icon={<Server className="text-electric-blue" />} />
                <HexSkill skill="GraphQL" icon={<Workflow className="text-electric-blue" />} />
                <HexSkill skill="Figma" icon={<Layout className="text-electric-blue" />} />
                <HexSkill skill="Tensorflow" icon={<Cpu className="text-electric-blue" />} />
              </div>
            </TerminalWindow>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
