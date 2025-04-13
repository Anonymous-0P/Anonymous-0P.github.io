
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import MatrixRain from "../components/MatrixRain";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Key } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: (
          <div className="flex items-center">
            <Key size={16} className="mr-2 text-neon-green" />
            <span>Access Granted</span>
          </div>
        ),
        description: "Welcome to my cybersecurity portfolio",
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <MatrixRain opacity={0.1} />
        <div className="text-center">
          <div className="font-mono text-neon-green text-xl mb-4">Initializing Secure Connection...</div>
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-neon-green to-electric-blue rounded-full animate-pulse"></div>
          </div>
          <div className="mt-4 font-mono text-xs text-foreground/60">Authenticating...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <MatrixRain opacity={0.02} />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
