
import TerminalWindow from "../TerminalWindow";
import GlitchText from "../GlitchText";
import { Calendar, Map, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-darker-bg relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <GlitchText text="About Me" className="text-electric-blue" hoverTriggered />
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <TerminalWindow title="about.md">
              <div className="prose prose-invert max-w-none">
                <div className="text-foreground/90 space-y-4">
                  <p>
                    I am a cybersecurity Engineer and Application developer with over 3 years of experience in building secure web applications and performing security assessments.
                  </p>
                  <p>
                    My journey in technology began when I was 16, taking apart computers and learning how they worked. That curiosity evolved into a passion for understanding digital security and creating robust software solutions.
                  </p>
                  <p>
                    I specialize in <span className="text-neon-green">penetration testing</span>, <span className="text-neon-green">secure code review</span>, and <span className="text-neon-green">building resilient web applications</span> that can withstand modern threats.
                  </p>
                  <p>
                    When I'm not coding or hacking ethically, you'll find me participating in CTF competitions, contributing to open-source security tools, or mentoring aspiring security professionals.
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </div>
          
          <div className="lg:col-span-6 order-1 lg:order-2">
            <TerminalWindow title="experience.json">
              <div className="space-y-6">
                <div className="border-l-2 border-electric-blue pl-4 py-1">
                  <div className="flex items-center mb-2">
                    <Briefcase size={18} className="text-neon-green mr-2" />
                    <h3 className="font-mono text-lg text-neon-green">CyberSecurity Engineer</h3>
                  </div>
                  <p className="text-foreground/80 mb-1">Eyesec CyberSecurity Solutions</p>
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>2021 - Present</span>
                    <Map size={14} className="ml-4 mr-1" />
                    <span>San Belagavi, KA</span>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground/80">
                    <li>• Led a team of security analysts in performing risk assessments</li>
                    <li>• Developed automated security testing framework</li>
                    <li>• Conducted security training for development teams</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-electric-blue pl-4 py-1">
                  <div className="flex items-center mb-2">  
                    <Briefcase size={18} className="text-neon-green mr-2" />
                    <h3 className="font-mono text-lg text-neon-green">Cloud Engineer</h3>
                  </div>
                  <p className="text-foreground/80 mb-1">TechInnovate Inc.</p>
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>2017 - 2020</span>
                    <Map size={14} className="ml-4 mr-1" />
                    <span>Seattle</span>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground/80">
                    <li>• Built secure web applications with React and Node.js</li>
                    <li>• Implemented OAuth 2.0 and OpenID Connect authentication</li>
                    <li>• Optimized database queries and API performance</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-electric-blue pl-4 py-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap size={18} className="text-neon-green mr-2" />
                    <h3 className="font-mono text-lg text-neon-green">B.E. Computer Science</h3>
                  </div>
                  <p className="text-foreground/80 mb-1">Angadi Intitute of Technology And Management</p>
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>2015 - 2017</span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Focus on Cybersecurity and Cryptography
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
