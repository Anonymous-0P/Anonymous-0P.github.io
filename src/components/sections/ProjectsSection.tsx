
import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "SecureAuth",
    description: "A modern authentication system with biometric verification and advanced encryption.",
    tags: ["React", "Node.js", "Cryptography", "TypeScript"],
    image: "https://placehold.co/600x400/222/39ff14?text=SecureAuth&font=montserrat",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "ThreatMapper",
    description: "Vulnerability scanner for containers and serverless environments with ML-based risk scoring.",
    tags: ["Python", "Docker", "Machine Learning", "AWS"],
    image: "https://placehold.co/600x400/222/0084ff?text=ThreatMapper&font=montserrat",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "CryptoVault",
    description: "Zero-knowledge encrypted file storage and sharing platform.",
    tags: ["Vue.js", "Golang", "Cryptography", "WebAssembly"],
    image: "https://placehold.co/600x400/222/39ff14?text=CryptoVault&font=montserrat",
    githubUrl: "#"
  },
  {
    title: "NetGuardian",
    description: "Network monitoring tool with real-time attack detection and visualization.",
    tags: ["React", "Python", "WebSockets", "D3.js"],
    image: "https://placehold.co/600x400/222/0084ff?text=NetGuardian&font=montserrat",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "CodeArmor",
    description: "Static code analysis tool for identifying security vulnerabilities in JavaScript applications.",
    tags: ["Node.js", "AST", "Security", "CLI"],
    image: "https://placehold.co/600x400/222/39ff14?text=CodeArmor&font=montserrat",
    githubUrl: "#"
  },
  {
    title: "BinaryWatch",
    description: "Reverse engineering toolkit with dynamic analysis capabilities.",
    tags: ["C++", "Assembly", "x86/x64", "Binary Analysis"],
    image: "https://placehold.co/600x400/222/0084ff?text=BinaryWatch&font=montserrat",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-darker-bg relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-electric-blue">&lt;</span>
          <span className="text-white"> Projects </span>
          <span className="text-electric-blue">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
