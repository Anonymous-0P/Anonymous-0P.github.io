
import { useState, useEffect } from "react";
import TerminalText from "../TerminalText";
import TerminalWindow from "../TerminalWindow";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="glow-text">{'>'} Hello, I'm</span>
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Prakash Karekar
              </h2>
            </div>
            
            {showContent && (
              <TerminalWindow className="max-w-md">
                <p className="cmd-line font-mono text-sm mb-4">whoami</p>
                <div className="mb-4">
                  <TerminalText
                    texts={[
                      "Cybersecurity Engineer",
                      "Web Developer",
                      "Ethical Hacker",
                      "Cloud Engineer"
                    ]}
                    className="terminal-text text-lg md:text-xl"
                  />
                </div>
                <p className="cmd-line font-mono text-sm mt-6">location</p>
                <p className="terminal-text text-sm">Belagavi, KA</p>
              </TerminalWindow>
            )}
            
            <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-neon-green hover:bg-neon-green/90 text-black font-mono font-semibold rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-transparent border border-electric-blue text-electric-blue hover:bg-electric-blue/10 font-mono font-semibold rounded-md transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className={`terminal-window aspect-square max-w-md mx-auto transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
              <img
                src="abt.jpg"
                alt="Prakash"
                className="rounded-md border border-neon-green/30 w-full h-full object-cover"
              />
              <div className="scan-line"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/60 hover:text-neon-green">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
