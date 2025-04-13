
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine which section is in view
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 300;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleItemClick = (target: string) => {
    setMobileMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-mono text-xl font-bold text-neon-green">
            <span className="text-electric-blue">&lt;</span>
            CyberPortfolio
            <span className="text-electric-blue">/&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleItemClick(item.target)}
                className={`nav-item ${activeSection === item.target ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground/90 hover:text-neon-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-black/95 backdrop-blur-md transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleItemClick(item.target)}
                className={`nav-item ${activeSection === item.target ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
