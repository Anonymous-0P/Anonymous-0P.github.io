
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
  hoverTriggered?: boolean;
}

const GlitchText = ({
  text,
  className = "",
  intensity = "medium",
  hoverTriggered = false,
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  
  const glitchCharacters = "!@#$%^&*<>_-+=[];:~";
  
  const getGlitchIntensity = () => {
    switch(intensity) {
      case "low": return { probability: 0.02, duration: 50, intervals: 2 };
      case "high": return { probability: 0.1, duration: 100, intervals: 5 };
      default: return { probability: 0.05, duration: 70, intervals: 3 };
    }
  };
  
  const { probability, duration, intervals } = getGlitchIntensity();
  
  useEffect(() => {
    if (hoverTriggered) return; // Don't auto-glitch if hover triggered
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        
        let timeoutId: NodeJS.Timeout;
        const applyGlitch = () => {
          const glitchedText = text
            .split("")
            .map(char => Math.random() < probability ? glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] : char)
            .join("");
          
          setDisplayText(glitchedText);
        };
        
        let count = 0;
        const glitchTimerId = setInterval(() => {
          applyGlitch();
          count++;
          if (count >= intervals) {
            clearInterval(glitchTimerId);
            setDisplayText(text);
            setIsGlitching(false);
          }
        }, duration);
        
        return () => {
          clearTimeout(timeoutId);
          clearInterval(glitchTimerId);
        };
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, [text, probability, duration, intervals, hoverTriggered]);
  
  const handleMouseEnter = () => {
    if (!hoverTriggered || isGlitching) return;
    
    setIsGlitching(true);
    let count = 0;
    
    const glitchInterval = setInterval(() => {
      const glitchedText = text
        .split("")
        .map(char => Math.random() < probability ? glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] : char)
        .join("");
      
      setDisplayText(glitchedText);
      count++;
      
      if (count >= intervals) {
        clearInterval(glitchInterval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, duration);
  };
  
  return (
    <span 
      className={`inline-block ${isGlitching ? "animate-glitch" : ""} ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
