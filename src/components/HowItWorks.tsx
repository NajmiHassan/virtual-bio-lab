import { Card, CardContent } from "@/components/ui/card";
import { Book, Beaker, BarChart3, FileText, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Book,
    title: "Agent reads the experiment",
    description: "AI analyzes your research question and identifies the optimal experimental approach",
    color: "text-primary"
  },
  {
    icon: Beaker,
    title: "Agent simulates experiment with existing data",
    description: "Leverages vast databases of scientific literature and experimental results",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Agent collects & organizes results",
    description: "Systematically processes and structures all relevant data points",
    color: "text-success"
  },
  {
    icon: FileText,
    title: "Agent analyzes & makes graphs",
    description: "Creates comprehensive visualizations and statistical analyses",
    color: "text-warning"
  },
  {
    icon: Lightbulb,
    title: "Agent writes report & suggests next steps",
    description: "Delivers actionable insights and recommendations for future research",
    color: "text-primary-glow"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Virtual BioLab</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents work together like a complete research team, handling every aspect of your experiment from conception to conclusion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="gradient-card border-border/50 hover:border-primary/30 transition-smooth h-full group hover:scale-105">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 relative">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${step.color.replace('text-', '')}/20 to-${step.color.replace('text-', '')}/5 flex items-center justify-center group-hover:glow-subtle transition-smooth`}>
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/50 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Flow Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-card border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Complete process typically takes 2-5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;