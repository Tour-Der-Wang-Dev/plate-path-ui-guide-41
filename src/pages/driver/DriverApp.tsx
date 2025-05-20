
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DriverApp = () => {
  // Driver status
  const [isActive, setIsActive] = React.useState(true);
  
  // Sample data for driver dashboard
  const stats = [
    { id: 1, title: "Today's Deliveries", value: 8, highlighted: false },
    { id: 2, title: "Today's Earnings", value: "$86.40", highlighted: true },
    { id: 3, title: "Total Distance", value: "34.2 mi", highlighted: false },
    { id: 4, title: "Acceptance Rate", value: "95%", highlighted: false },
  ];
  
  // Sample current and upcoming deliveries
  const currentDelivery = {
    id: "#4321",
    pickup: "Burger Palace, 123 Food St",
    dropoff: "789 Main St, Apt 4B",
    customer: "John Smith",
    items: 3,
    total: "$42.50",
    eta: "10 min",
  };
  
  const upcomingDeliveries = [
    { id: "#4325", pickup: "Pizza Heaven, 456 Pie Ave", dropoff: "321 Oak St", customer: "Emma Johnson", eta: "25 min" },
    { id: "#4328", pickup: "Sushi World, 789 Ocean Blvd", dropoff: "654 Pine St", customer: "Michael Brown", eta: "40 min" },
  ];

  return (
    <AppLayout title="Driver Dashboard" type="driver">
      <div className="space-y-8">
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <Button 
              variant={isActive ? "default" : "outline"}
              className={isActive ? "bg-food-success hover:bg-food-success/90" : ""}
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? "Online" : "Go Online"}
            </Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id} className={stat.highlighted ? "border-food-primary" : ""}>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle className={`text-2xl ${stat.highlighted ? "text-food-primary" : ""}`}>
                    {stat.value}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Current Delivery</h2>
          <Card className="border-food-primary">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Order {currentDelivery.id}</CardTitle>
                <span className="bg-food-primary/10 text-food-primary px-3 py-1 rounded-full text-sm font-medium">
                  ETA: {currentDelivery.eta}
                </span>
              </div>
              <CardDescription>Customer: {currentDelivery.customer}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="min-w-5 h-5 rounded-full bg-food-primary flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">P</span>
                  </div>
                  <div>
                    <p className="font-medium">Pickup</p>
                    <p className="text-muted-foreground">{currentDelivery.pickup}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="min-w-5 h-5 rounded-full bg-food-primary flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">D</span>
                  </div>
                  <div>
                    <p className="font-medium">Dropoff</p>
                    <p className="text-muted-foreground">{currentDelivery.dropoff}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pt-2 border-t">
                <span>{currentDelivery.items} items</span>
                <span className="font-medium">{currentDelivery.total}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button>Picked Up</Button>
                <Button variant="outline">View Details</Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Deliveries</h2>
          <div className="space-y-4">
            {upcomingDeliveries.map((delivery) => (
              <Card key={delivery.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Order {delivery.id}</CardTitle>
                    <span className="text-muted-foreground text-sm">
                      ETA: {delivery.eta}
                    </span>
                  </div>
                  <CardDescription>Customer: {delivery.customer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="min-w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                        <span className="text-muted-foreground text-xs">P</span>
                      </div>
                      <p className="text-muted-foreground">{delivery.pickup}</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="min-w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                        <span className="text-muted-foreground text-xs">D</span>
                      </div>
                      <p className="text-muted-foreground">{delivery.dropoff}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default DriverApp;
