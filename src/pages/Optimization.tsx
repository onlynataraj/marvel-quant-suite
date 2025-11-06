import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Zap, TrendingUp } from "lucide-react";

const Optimization = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Strategy Optimization</h2>
          <p className="text-muted-foreground">Fine-tune your strategies for optimal performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Parameters Panel */}
          <Card className="lg:col-span-1 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Optimization Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="strategy-select">Select Strategy</Label>
                <Input id="strategy-select" placeholder="Momentum Strategy" />
              </div>
              
              <div className="space-y-3">
                <Label>Moving Average Period</Label>
                <div className="flex items-center gap-4">
                  <Slider defaultValue={[20]} max={200} step={1} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12 text-right">20</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Risk Tolerance (%)</Label>
                <div className="flex items-center gap-4">
                  <Slider defaultValue={[2]} max={10} step={0.5} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12 text-right">2%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Position Size (%)</Label>
                <div className="flex items-center gap-4">
                  <Slider defaultValue={[10]} max={50} step={5} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12 text-right">10%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="iterations">Optimization Iterations</Label>
                <Input id="iterations" type="number" placeholder="1000" />
              </div>
              
              <Button className="w-full gap-2">
                <Zap className="h-4 w-4" />
                Start Optimization
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="lg:col-span-2 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Optimization Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Best Parameters */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Optimal Parameters Found
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary">
                    <p className="text-sm text-muted-foreground">MA Period</p>
                    <p className="text-xl font-bold text-foreground">45</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary">
                    <p className="text-sm text-muted-foreground">Risk Tolerance</p>
                    <p className="text-xl font-bold text-foreground">2.5%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary">
                    <p className="text-sm text-muted-foreground">Position Size</p>
                    <p className="text-xl font-bold text-foreground">15%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary">
                    <p className="text-sm text-muted-foreground">Expected Return</p>
                    <p className="text-xl font-bold text-success">+32.4%</p>
                  </div>
                </div>
              </div>

              {/* Performance Comparison */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Before vs After Optimization</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Before Optimization</p>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 rounded bg-secondary/50">
                        <span className="text-sm text-muted-foreground">Return</span>
                        <span className="text-sm font-semibold">+18.2%</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-secondary/50">
                        <span className="text-sm text-muted-foreground">Sharpe</span>
                        <span className="text-sm font-semibold">1.42</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-secondary/50">
                        <span className="text-sm text-muted-foreground">Max DD</span>
                        <span className="text-sm font-semibold">-12.1%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-success">After Optimization</p>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 rounded bg-secondary">
                        <span className="text-sm text-muted-foreground">Return</span>
                        <span className="text-sm font-semibold text-success">+32.4%</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-secondary">
                        <span className="text-sm text-muted-foreground">Sharpe</span>
                        <span className="text-sm font-semibold text-success">2.18</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-secondary">
                        <span className="text-sm text-muted-foreground">Max DD</span>
                        <span className="text-sm font-semibold text-success">-7.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimization History */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Optimization History</h3>
                <div className="h-48 rounded-lg bg-secondary flex items-center justify-center">
                  <p className="text-muted-foreground">Parameter convergence chart will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Optimization;
