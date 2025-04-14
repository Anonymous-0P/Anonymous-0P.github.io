
import { useState } from "react";
import TerminalWindow from "../TerminalWindow";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commandOutput, setCommandOutput] = useState("");
  const [commandSuccess, setCommandSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCommandOutput("Initiating secure connection...");
    
    // Simulate encryption and submission process
    setTimeout(() => {
      setCommandOutput(prev => prev + "\nVerifying credentials...");
    }, 500);
    
    setTimeout(() => {
      setCommandOutput(prev => prev + "\nEncrypting message contents...");
    }, 1000);
    
    setTimeout(() => {
      setCommandOutput(prev => prev + "\nEstablishing secure channel...");
    }, 1500);
    
    setTimeout(() => {
      setCommandOutput(prev => prev + "\nTransmitting encrypted payload...");
    }, 2000);
    
    setTimeout(() => {
      // Simulate successful submission
      setCommandOutput(prev => prev + "\nMessage delivered successfully!");
      setCommandSuccess(true);
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent",
        description: "Your message has been securely transmitted!",
        variant: "default",
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset command output after a delay
      setTimeout(() => {
        setCommandOutput("");
        setCommandSuccess(null);
      }, 3000);
    }, 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-neon-green">$</span>
          <span className="text-white"> Contact Me </span>
          <span className="text-neon-green">~</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <TerminalWindow className="h-full" showHeader={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xl text-neon-green mb-4">Get in Touch</h3>
                  <p className="text-foreground/80 mb-6">
                    Have a project in mind or want to discuss cybersecurity opportunities? Send me a message through this encrypted channel.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black border border-neon-green flex items-center justify-center mr-3">
                      <span className="text-neon-green text-sm">@</span>
                    </div>
                    <a href="mailto:contact@johndoe.com" className="text-foreground/80 hover:text-neon-green transition-colors">
                      prakashkarekar4@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black border border-neon-green flex items-center justify-center mr-3">
                      <span className="text-neon-green text-sm">#</span>
                    </div>
                    <span className="text-foreground/80">
                      Belagavi, KA-IN
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black border border-neon-green flex items-center justify-center mr-3">
                      <span className="text-neon-green text-sm">!</span>
                    </div>
                    <span className="text-foreground/80">
                      Available for freelance & full-time positions
                    </span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex space-x-4">
                    <a href="https://github.com/Anonymous-0P" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                    </a>
                    <a href="https://x.com/prakash_karekar" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/prakash-karekar-241960240/" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-neon-green/20 transition-colors">
                      <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
          
          <div>
            <TerminalWindow title="contact.sh">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-foreground/80 mb-1">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-neon-green/30 rounded px-3 py-2 text-foreground/90 focus:outline-none focus:border-neon-green font-mono text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-foreground/80 mb-1">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-neon-green/30 rounded px-3 py-2 text-foreground/90 focus:outline-none focus:border-neon-green font-mono text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-foreground/80 mb-1">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black border border-neon-green/30 rounded px-3 py-2 text-foreground/90 focus:outline-none focus:border-neon-green font-mono text-sm resize-none"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-neon-green/90 hover:bg-neon-green text-black font-mono font-semibold rounded flex items-center justify-center transition-all duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2" size={16} />
                          Send Message
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
              
              {commandOutput && (
                <div className="mt-4 border-t border-neon-green/20 pt-4">
                  <div className="font-mono text-xs text-foreground/70">
                    {commandOutput.split('\n').map((line, i) => (
                      <div key={i} className="pl-4 py-0.5">
                        {line}
                      </div>
                    ))}
                  </div>
                  
                  {commandSuccess !== null && (
                    <div className={`mt-2 flex items-center ${commandSuccess ? 'text-neon-green' : 'text-red-500'}`}>
                      {commandSuccess ? (
                        <CheckCircle size={16} className="mr-1" />
                      ) : (
                        <AlertCircle size={16} className="mr-1" />
                      )}
                      <span className="font-mono text-sm">
                        {commandSuccess ? "Connection successful" : "Connection failed"}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
