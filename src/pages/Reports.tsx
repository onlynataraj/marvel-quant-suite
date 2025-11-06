import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "Jan", profit: 12500, loss: -3200 },
  { month: "Feb", profit: 15800, loss: -4100 },
  { month: "Mar", profit: 10200, loss: -5600 },
  { month: "Apr", profit: 18900, loss: -2800 },
  { month: "May", profit: 21300, loss: -3900 },
  { month: "Jun", profit: 24500, loss: -4200 },
];

const strategyAllocation = [
  { name: "Momentum", value: 35 },
  { name: "Mean Reversion", value: 25 },
  { name: "Arbitrage", value: 20 },
  { name: "Trend Following", value: 20 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h2>
            <p className="text-muted-foreground">Comprehensive performance insights and statistics</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Profit</p>
                  <p className="text-2xl font-bold text-success">$103,200</p>
                  <p className="text-xs text-muted-foreground mt-1">+18.5% YTD</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Loss</p>
                  <p className="text-2xl font-bold text-destructive">-$23,800</p>
                  <p className="text-xs text-muted-foreground mt-1">-4.2% YTD</p>
                </div>
                <TrendingDown className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Net Profit</p>
                <p className="text-2xl font-bold text-foreground">$79,400</p>
                <p className="text-xs text-muted-foreground mt-1">ROI: 79.4%</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                <p className="text-2xl font-bold text-foreground">1.89</p>
                <p className="text-xs text-muted-foreground mt-1">Risk-adjusted</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Monthly P&L</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="profit" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="loss" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Strategy Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={strategyAllocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {strategyAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Statistics */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Trades</p>
                <p className="text-xl font-bold text-foreground">1,247</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Win Rate</p>
                <p className="text-xl font-bold text-foreground">67.3%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Win</p>
                <p className="text-xl font-bold text-success">$185</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Loss</p>
                <p className="text-xl font-bold text-destructive">-$95</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Profit Factor</p>
                <p className="text-xl font-bold text-foreground">2.34</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Max Drawdown</p>
                <p className="text-xl font-bold text-destructive">-8.3%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Recovery Factor</p>
                <p className="text-xl font-bold text-foreground">9.56</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Expectancy</p>
                <p className="text-xl font-bold text-foreground">$63.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
