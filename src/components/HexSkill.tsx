
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HexSkillProps {
  skill: string;
  icon: React.ReactNode;
  description?: string;
}

const HexSkill = ({ skill, icon, description }: HexSkillProps) => {
  const [hover, setHover] = useState(false);
  
  const hexContent = (
    <div 
      className="hex-item" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <div className={`hex-inner ${hover ? "border-neon-green bg-black shadow-[0_0_15px_rgba(57,255,20,0.2)]" : ""}`}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl mb-1">{icon}</div>
          <div className={`text-xs font-mono transition-colors duration-300 ${hover ? "text-neon-green" : "text-foreground/70"}`}>
            {skill}
          </div>
        </div>
      </div>
    </div>
  );

  if (description) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hexContent}
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return hexContent;
};

export default HexSkill;
