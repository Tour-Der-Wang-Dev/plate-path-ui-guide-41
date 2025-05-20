
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  // Sample data for admin dashboard
  const stats = [
    { id: 1, title: "Total Users", value: "12,345", change: "+12% from last month" },
    { id: 2, title: "Active Restaurants", value: "486", change: "+8% from last month" },
    { id: 3, title: "Active Drivers", value: "742", change: "+15% from last month" },
    { id: 4, title: "Orders Today", value: "1,823", change: "+5% from last week" },
  ];
  
  // Sample chart data
  const orderData = [
    { name: "Mon", orders: 120 },
    { name: "Tue", orders: 145 },
    { name: "Wed", orders: 175 },
    { name: "Thu", orders: 190 },
    { name: "Fri", orders: 210 },
    { name: "Sat", orders: 250 },
    { name: "Sun", orders: 220 },
  ];
  
  const revenueData = [
    { name: "Jan", revenue: 4200 },
    { name: "Feb", revenue: 4500 },
    { name: "Mar", revenue: 5200 },
    { name: "Apr", revenue: 4800 },
    { name: "May", revenue: 5500 },
    { name: "Jun", revenue: 6500 },
    { name: "Jul", revenue: 7200 },
  ];
  
  const cuisineData = [
    { name: "Italian", value: 35 },
    { name: "American", value: 25 },
    { name: "Mexican", value: 15 },
    { name: "Asian", value: 18 },
    { name: "Other", value: 7 },
  ];
  
  const COLORS = ['#FF7A00', '#FFB800', '#FF4D4D', '#4CAF50', '#2196F3'];

  // Sample recent activity
  const recentActivity = [
    { id: 1, action: "New restaurant registered", target: "Pizza Heaven", time: "5 minutes ago" },
    { id: 2, action: "New user signed up", target: "john.doe@example.com", time: "12 minutes ago" },
    { id: 3, action: "Order disputed", target: "Order #4237", time: "25 minutes ago" },
    { id: 4, action: "Driver application submitted", target: "Emma Johnson", time: "45 minutes ago" },
    { id: 5, action: "Restaurant updated menu", target: "Burger Palace", time: "1 hour ago" },
  ];

  return (
    <AppLayout title="Admin Dashboard" type="admin">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{stat.value}</CardTitle>
                  <CardDescription>{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={orderData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#FF7A00" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#FF7A00" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cuisine Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cuisineData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {cuisineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">
                        {activity.action.startsWith("New") ? "N" : 
                          activity.action.startsWith("Order") ? "O" : 
                          activity.action.startsWith("Driver") ? "D" : "R"}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.target}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </AppLayout>
  );
};

export default AdminDashboard;
