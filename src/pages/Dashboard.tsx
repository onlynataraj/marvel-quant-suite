import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { TrendingUp, DollarSign, Activity, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { date: "Jan", value: 100000 },
  { date: "Feb", value: 105000 },
  { date: "Mar", value: 102000 },
  { date: "Apr", value: 110000 },
  { date: "May", value: 115000 },
  { date: "Jun", value: 120000 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back to your trading overview</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Portfolio Value"
            value="$120,450"
            change="+12.5% from last month"
            icon={DollarSign}
            trend="up"
          />
          <MetricCard
            title="Active Strategies"
            value="8"
            change="3 optimized this week"
            icon={Target}
            trend="neutral"
          />
          <MetricCard
            title="Win Rate"
            value="67.3%"
            change="+2.1% from last month"
            icon={TrendingUp}
            trend="up"
          />
          <MetricCard
            title="Daily P&L"
            value="$2,340"
            change="+$340 from yesterday"
            icon={Activity}
            trend="up"
          />
        </div>

        {/* Performance Chart */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Trades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { symbol: "AAPL", action: "BUY", shares: 100, price: "$178.50", time: "2 mins ago" },
                { symbol: "GOOGL", action: "SELL", shares: 50, price: "$142.30", time: "15 mins ago" },
                { symbol: "MSFT", action: "BUY", shares: 75, price: "$415.20", time: "1 hour ago" },
              ].map((trade, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div>
                    <p className="font-semibold text-foreground">{trade.symbol}</p>
                    <p className="text-sm text-muted-foreground">{trade.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={trade.action === "BUY" ? "text-success" : "text-destructive"}>
                      {trade.action} {trade.shares}
                    </p>
                    <p className="text-sm text-muted-foreground">{trade.price}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Strategy Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Momentum Strategy", return: "+15.3%", sharpe: "1.82" },
                { name: "Mean Reversion", return: "+8.7%", sharpe: "1.45" },
                { name: "Arbitrage Bot", return: "+12.1%", sharpe: "2.01" },
              ].map((strategy, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div>
                    <p className="font-semibold text-foreground">{strategy.name}</p>
                    <p className="text-sm text-muted-foreground">Sharpe: {strategy.sharpe}</p>
                  </div>
                  <div className="text-success font-semibold">
                    {strategy.return}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
