import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Play, Download } from "lucide-react";

const Backtesting = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Backtesting</h2>
          <p className="text-muted-foreground">Test your strategies against historical data</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configuration Panel */}
          <Card className="lg:col-span-1 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Strategy Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="strategy-name">Strategy Name</Label>
                <Input id="strategy-name" placeholder="My Strategy" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="capital">Initial Capital ($)</Label>
                <Input id="capital" type="number" placeholder="100000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="symbols">Symbols (comma-separated)</Label>
                <Input id="symbols" placeholder="AAPL, GOOGL, MSFT" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="strategy-code">Strategy Code</Label>
                <Textarea 
                  id="strategy-code" 
                  placeholder="# Enter your Python strategy code here"
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
              
              <Button className="w-full gap-2">
                <Play className="h-4 w-4" />
                Run Backtest
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="lg:col-span-2 border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Backtest Results</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Total Return</p>
                  <p className="text-2xl font-bold text-success">+24.5%</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                  <p className="text-2xl font-bold text-foreground">1.87</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Max Drawdown</p>
                  <p className="text-2xl font-bold text-destructive">-8.3%</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold text-foreground">65.2%</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Total Trades</p>
                  <p className="text-2xl font-bold text-foreground">342</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Avg Trade</p>
                  <p className="text-2xl font-bold text-success">+$127</p>
                </div>
              </div>

              {/* Equity Curve Placeholder */}
              <div className="h-64 rounded-lg bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground">Equity curve will appear here after running backtest</p>
              </div>

              {/* Trade List */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Recent Trades</h3>
                <div className="space-y-2">
                  {[
                    { date: "2024-01-15", symbol: "AAPL", action: "BUY", shares: 100, price: "$175.20", pnl: "+$520" },
                    { date: "2024-01-16", symbol: "GOOGL", action: "SELL", shares: 50, price: "$140.80", pnl: "+$340" },
                    { date: "2024-01-17", symbol: "MSFT", action: "BUY", shares: 75, price: "$410.50", pnl: "-$180" },
                  ].map((trade, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary text-sm">
                      <span className="text-muted-foreground">{trade.date}</span>
                      <span className="font-semibold text-foreground">{trade.symbol}</span>
                      <span className={trade.action === "BUY" ? "text-success" : "text-destructive"}>
                        {trade.action}
                      </span>
                      <span className="text-foreground">{trade.shares} @ {trade.price}</span>
                      <span className={trade.pnl.startsWith("+") ? "text-success" : "text-destructive"}>
                        {trade.pnl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Backtesting;
