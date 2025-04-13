
import { useEffect, useState, useRef } from "react";

interface SkillBarProps {
  name: string;
  percent: number;
  color?: string;
  delay?: number;
}

const SkillBar = ({
  name,
  percent,
  color = "from-neon-green to-electric-blue",
  delay = 0
}: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const observed = useRef(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true;
          setTimeout(() => {
            setWidth(percent);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percent, delay]);
  
  return (
    <div ref={skillRef} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-sm text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-neon-green/80">{percent}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress bg-gradient-to-r ${color}`}
          style={{
            width: `${width}%`,
            transition: "width 1s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
