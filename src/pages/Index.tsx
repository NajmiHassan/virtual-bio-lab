import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ExperimentBox from "@/components/ExperimentBox";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <ExperimentBox />
      <Benefits />
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Virtual BioLab
              </span>
            </h3>
            <p className="text-muted-foreground">
              Revolutionizing biological research with AI-powered virtual experiments
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Contact</a>
            <a href="#" className="hover:text-primary transition-smooth">Documentation</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              © 2024 Virtual BioLab. All rights reserved. 
              <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
                Powered by advanced AI and scientific databases.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
