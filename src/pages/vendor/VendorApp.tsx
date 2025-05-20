
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VendorApp = () => {
  // Sample data for vendor dashboard
  const stats = [
    { id: 1, title: "Today's Orders", value: 24, trend: "+5%", trendUp: true },
    { id: 2, title: "Total Revenue", value: "$1,248.42", trend: "+12%", trendUp: true },
    { id: 3, title: "New Customers", value: 18, trend: "+2%", trendUp: true },
    { id: 4, title: "Avg. Order Value", value: "$52.01", trend: "-3%", trendUp: false },
  ];
  
  // Sample recent orders
  const recentOrders = [
    { id: "#4321", customer: "John Smith", items: 3, total: "$42.50", status: "Completed", time: "10 min ago" },
    { id: "#4320", customer: "Emma Johnson", items: 5, total: "$67.25", status: "In Progress", time: "25 min ago" },
    { id: "#4319", customer: "Michael Brown", items: 2, total: "$23.90", status: "In Progress", time: "35 min ago" },
    { id: "#4318", customer: "Sophia Williams", items: 4, total: "$48.75", status: "Completed", time: "1 hour ago" },
    { id: "#4317", customer: "James Davis", items: 1, total: "$15.99", status: "Completed", time: "1 hour ago" },
  ];

  return (
    <AppLayout title="Restaurant Dashboard" type="vendor">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id}>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-baseline">
                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                    <span className={`text-sm font-medium ${stat.trendUp ? 'text-food-success' : 'text-food-error'}`}>
                      {stat.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Order ID</th>
                    <th className="text-left p-4">Customer</th>
                    <th className="text-left p-4">Items</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4">{order.customer}</td>
                      <td className="p-4">{order.items}</td>
                      <td className="p-4">{order.total}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "Completed" 
                            ? "bg-food-success/10 text-food-success" 
                            : "bg-food-warning/10 text-food-warning"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </AppLayout>
  );
};

export default VendorApp;
