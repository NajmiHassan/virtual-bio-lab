import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40 delay-500" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-pulse opacity-50 delay-1000" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent-glow rounded-full animate-pulse opacity-70 delay-1500" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Virtual Laboratory</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Run Biology Experiments
          </span>
          <br />
          <span className="text-foreground">in Minutes, Not Weeks</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          AI agents act like lab staff—reading, simulating, analyzing, and reporting 
          your experiments virtually. Get instant results without expensive equipment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-bounce shadow-lg glow-primary px-8 py-6 text-lg font-semibold"
          >
            Start an Experiment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-smooth px-8 py-6 text-lg backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5 min</div>
            <div className="text-sm text-muted-foreground">Average experiment time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">90%</div>
            <div className="text-sm text-muted-foreground">Cost reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Lab availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;