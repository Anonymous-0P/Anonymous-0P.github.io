
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image = "/placeholder.svg",
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="terminal-header">
        <div className="flex">
          <span className="terminal-dot bg-red-500/70"></span>
          <span className="terminal-dot bg-yellow-500/70"></span>
          <span className="terminal-dot bg-green-500/70"></span>
        </div>
        <div className="ml-2 text-xs font-mono text-foreground/60">
          {title}.exe
        </div>
      </div>
      
      <div className="relative aspect-video overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        
        <div className="project-overlay">
          <h3 className="font-mono text-neon-green mb-2">{title}</h3>
          <p className="text-sm text-foreground/80 mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-black/50 border border-electric-blue/30 text-electric-blue rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-foreground/80 hover:text-neon-green"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-foreground/80 hover:text-neon-green"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
