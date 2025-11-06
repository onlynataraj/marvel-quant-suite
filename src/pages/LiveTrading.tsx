import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Play, Square, AlertCircle } from "lucide-react";

const LiveTrading = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Live Trading</h2>
            <p className="text-muted-foreground">Monitor and control your active trading strategies</p>
          </div>
          <Badge variant="outline" className="text-success border-success gap-2 px-4 py-2">
            <Activity className="h-4 w-4 animate-pulse" />
            Market Open
          </Badge>
        </div>

        {/* Active Strategies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { 
              name: "Momentum Strategy A",
              status: "active",
              deployed: "2 hours ago",
              pnl: "+$1,240",
              trades: 12,
              winRate: "75%"
            },
            { 
              name: "Mean Reversion B",
              status: "active",
              deployed: "5 hours ago",
              pnl: "+$850",
              trades: 8,
              winRate: "62.5%"
            },
            { 
              name: "Arbitrage Bot C",
              status: "paused",
              deployed: "1 day ago",
              pnl: "+$320",
              trades: 24,
              winRate: "58.3%"
            },
          ].map((strategy, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-foreground mb-1">{strategy.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Deployed {strategy.deployed}</p>
                </div>
                <Badge 
                  variant={strategy.status === "active" ? "default" : "secondary"}
                  className={strategy.status === "active" ? "bg-success" : ""}
                >
                  {strategy.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">P&L Today</p>
                    <p className="text-xl font-bold text-success">{strategy.pnl}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trades</p>
                    <p className="text-xl font-bold text-foreground">{strategy.trades}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Win Rate</p>
                    <p className="text-xl font-bold text-foreground">{strategy.winRate}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {strategy.status === "active" ? (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Square className="h-4 w-4" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" className="gap-2">
                      <Play className="h-4 w-4" />
                      Resume
                    </Button>
                  )}
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real-time Feed */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Live Trade Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { time: "14:32:15", strategy: "Momentum Strategy A", symbol: "AAPL", action: "BUY", qty: 50, price: "$178.45" },
                { time: "14:31:42", strategy: "Mean Reversion B", symbol: "GOOGL", action: "SELL", qty: 25, price: "$142.80" },
                { time: "14:30:08", strategy: "Momentum Strategy A", symbol: "MSFT", action: "BUY", qty: 40, price: "$415.20" },
                { time: "14:28:33", strategy: "Arbitrage Bot C", symbol: "TSLA", action: "SELL", qty: 15, price: "$242.15" },
                { time: "14:27:19", strategy: "Mean Reversion B", symbol: "NVDA", action: "BUY", qty: 30, price: "$875.40" },
              ].map((trade, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground font-mono">{trade.time}</span>
                    <span className="text-sm text-muted-foreground">{trade.strategy}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-foreground">{trade.symbol}</span>
                    <Badge variant={trade.action === "BUY" ? "default" : "secondary"} className={trade.action === "BUY" ? "bg-success" : "bg-destructive"}>
                      {trade.action}
                    </Badge>
                    <span className="text-sm text-foreground">{trade.qty} @ {trade.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Alerts */}
        <Card className="border-border bg-card border-destructive/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
                <div>
                  <p className="font-medium text-foreground">Daily loss limit approaching</p>
                  <p className="text-sm text-muted-foreground">Momentum Strategy A - 82% of limit reached</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                <div>
                  <p className="font-medium text-foreground">High volatility detected</p>
                  <p className="text-sm text-muted-foreground">Consider reducing position sizes</p>
                </div>
                <Button variant="outline" size="sm">Acknowledge</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LiveTrading;
