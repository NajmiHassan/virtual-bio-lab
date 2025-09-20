import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Zap, Shield, Users, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    subtitle: "Results in minutes",
    description: "Get experimental insights instantly instead of waiting weeks for lab results. Our AI processes years of research data in minutes.",
    color: "primary",
    stat: "95%",
    statLabel: "Faster than traditional methods"
  },
  {
    icon: DollarSign,
    title: "Save Money",
    subtitle: "No expensive equipment needed",
    description: "Eliminate costly chemicals, lab equipment, and facility fees. Test hundreds of hypotheses for the cost of a single experiment.",
    color: "success",
    stat: "$50K+",
    statLabel: "Average lab cost savings"
  },
  {
    icon: Zap,
    title: "Test Ideas Fast",
    subtitle: "Validate before real lab work",
    description: "Rapidly iterate through experimental designs and identify the most promising approaches before investing in physical experiments.",
    color: "accent",
    stat: "10x",
    statLabel: "More experiments per day"
  },
  {
    icon: Shield,
    title: "Risk-Free Testing",
    subtitle: "No safety hazards",
    description: "Explore dangerous or complex experiments virtually without exposure to harmful chemicals or expensive mistakes.",
    color: "warning",
    stat: "100%",
    statLabel: "Safety guarantee"
  },
  {
    icon: Users,
    title: "24/7 Lab Access",
    subtitle: "Never wait for availability",
    description: "Run experiments anytime, anywhere. No scheduling conflicts, no equipment downtime, no waiting for lab technicians.",
    color: "primary-glow",
    stat: "24/7",
    statLabel: "Always available"
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    subtitle: "AI-powered recommendations",
    description: "Get intelligent suggestions for follow-up experiments, alternative approaches, and optimization strategies.",
    color: "accent-glow",
    stat: "AI",
    statLabel: "Research assistant"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-success/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Virtual BioLab?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your research workflow with AI-powered virtual experiments that deliver real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClass = benefit.color.includes('-') ? benefit.color : benefit.color;
            
            return (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover:scale-105 hover:glow-subtle"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-${colorClass}/20 flex items-center justify-center mb-4 group-hover:glow-subtle transition-smooth`}>
                      <IconComponent className={`w-7 h-7 text-${colorClass}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    
                    <p className={`text-sm font-medium text-${colorClass} mb-4`}>
                      {benefit.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className={`text-2xl font-bold text-${colorClass}`}>
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {benefit.statLabel}
                        </div>
                      </div>
                      <div className={`w-8 h-1 bg-gradient-to-r from-${colorClass}/50 to-${colorClass} rounded-full`}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-1 rounded-full gradient-card border border-primary/20">
            <div className="flex items-center gap-2 px-6 py-3">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Join thousands of researchers already using Virtual BioLab</span>
            </div>
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-bounce">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;