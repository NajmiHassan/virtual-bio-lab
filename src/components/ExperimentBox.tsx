import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, FileText, Zap } from "lucide-react";

const ExperimentBox = () => {
  const [experiment, setExperiment] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleRunExperiment = () => {
    if (!experiment.trim()) return;
    
    setIsRunning(true);
    // Simulate experiment running
    setTimeout(() => {
      setIsRunning(false);
      setShowResults(true);
    }, 3000);
  };

  const mockResults = {
    summary: "Drug A shows 78% inhibition of Gene X expression in cellular models",
    confidence: "High (94%)",
    timeframe: "2.3 minutes",
    dataPoints: "1,247 relevant studies analyzed"
  };

  return (
    <section className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Try a <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Virtual Experiment</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ask any biology question and get instant, scientifically-backed results
          </p>
        </div>

        {/* Main Experiment Input */}
        <Card className="gradient-card border-primary/20 glow-subtle mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Zap className="w-6 h-6 text-primary" />
              Experiment Query
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Describe your experiment or research question:
              </label>
              <Textarea
                placeholder="What will happen if I use Drug A on Gene X?"
                value={experiment}
                onChange={(e) => setExperiment(e.target.value)}
                className="min-h-[120px] bg-input/50 border-border/50 focus:border-primary/50 resize-none text-base"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Example queries:</Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary/10 transition-smooth text-xs"
                onClick={() => setExperiment("What happens when CRISPR targets the p53 gene in cancer cells?")}
              >
                CRISPR + p53 gene
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary/10 transition-smooth text-xs"
                onClick={() => setExperiment("How does caffeine affect mitochondrial function in neurons?")}
              >
                Caffeine + mitochondria
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary/10 transition-smooth text-xs"
                onClick={() => setExperiment("What's the effect of temperature on enzyme kinetics?")}
              >
                Temperature + enzymes
              </Badge>
            </div>

            <Button 
              onClick={handleRunExperiment}
              disabled={!experiment.trim() || isRunning}
              className="w-full gradient-primary hover:scale-105 transition-bounce py-6 text-lg font-semibold"
            >
              {isRunning ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                  Running Virtual Experiment...
                </>
              ) : (
                <>
                  <Play className="mr-2 w-5 h-5" />
                  Run Virtual Experiment
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {/* Results Summary */}
            <Card className="gradient-card border-success/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <TrendingUp className="w-5 h-5" />
                  Results Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {mockResults.summary}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Confidence Level:</span>
                    <Badge className="bg-success/20 text-success border-success/30">
                      {mockResults.confidence}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Analysis Time:</span>
                    <span className="text-sm font-medium text-primary">{mockResults.timeframe}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Data Sources:</span>
                    <span className="text-sm font-medium text-accent">{mockResults.dataPoints}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Preview */}
            <Card className="gradient-card border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <FileText className="w-5 h-5" />
                  Full Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Methodology & Controls
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Statistical Analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Visual Charts & Graphs
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    Next Steps & Recommendations
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent/10">
                  Download Full Report
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperimentBox;