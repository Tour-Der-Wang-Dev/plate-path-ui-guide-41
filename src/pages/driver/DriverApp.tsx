import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, MapPin, Banknote, Navigation, ChevronRight, Star, ShieldCheck } from "lucide-react";
import { useDriverOrders } from "@/hooks/useOrders";
import { Badge } from "@/components/ui/badge";
import { cardVariants, textVariants, responsiveSpacing } from "@/lib/design-system";

const DriverApp = () => {
  // Driver status
  const [isActive, setIsActive] = useState(true);
  const [currentView, setCurrentView] = useState<'dashboard' | 'earnings' | 'deliveries'>('dashboard');
  
  // Use the hooks to get order data
  const { data: driverOrders, isLoading } = useDriverOrders();
  
  // Sample data for driver dashboard
  const stats = [
    { id: 1, title: "Today's Deliveries", value: 8, icon: <Navigation className="h-5 w-5 text-food-primary" />, highlighted: false },
    { id: 2, title: "Today's Earnings", value: "$86.40", icon: <Banknote className="h-5 w-5 text-food-primary" />, highlighted: true },
    { id: 3, title: "Total Distance", value: "34.2 mi", icon: <MapPin className="h-5 w-5 text-food-primary" />, highlighted: false },
    { id: 4, title: "Acceptance Rate", value: "95%", icon: <ShieldCheck className="h-5 w-5 text-food-primary" />, highlighted: false },
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
    status: "Picked up",
    customerRating: 4.8,
  };
  
  const upcomingDeliveries = [
    { id: "#4325", pickup: "Pizza Heaven, 456 Pie Ave", dropoff: "321 Oak St", customer: "Emma Johnson", eta: "25 min" },
    { id: "#4328", pickup: "Sushi World, 789 Ocean Blvd", dropoff: "654 Pine St", customer: "Michael Brown", eta: "40 min" },
    { id: "#4332", pickup: "Taco Time, 101 Spice Rd", dropoff: "876 Elm St", customer: "Sarah Davis", eta: "55 min" },
  ];

  // Mock earnings data
  const weeklyEarnings = [
    { day: "Mon", amount: 75.50 },
    { day: "Tue", amount: 92.25 },
    { day: "Wed", amount: 86.40 },
    { day: "Thu", amount: 110.75 },
    { day: "Fri", amount: 135.60 },
    { day: "Sat", amount: 145.30 },
    { day: "Sun", amount: 128.90 },
  ];

  const totalWeeklyEarnings = weeklyEarnings.reduce((sum, day) => sum + day.amount, 0).toFixed(2);
  
  const handleStatusToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <AppLayout title="Driver Dashboard" type="driver">
      <div className="px-4 py-6 md:px-6 space-y-8">
        {/* Status Bar */}
        <div className="relative bg-gradient-to-r from-background to-muted/30 rounded-xl p-6 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h1 className={`${textVariants.h2} mb-2`}>Welcome back, Driver</h1>
              <p className="text-muted-foreground">
                {isActive ? 'You are currently online and receiving delivery requests.' : 'You are offline. Go online to start receiving delivery requests.'}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <Button 
                size="lg"
                variant={isActive ? "default" : "outline"}
                className={isActive ? "bg-food-success hover:bg-food-success/90 text-white" : ""}
                onClick={handleStatusToggle}
              >
                {isActive ? "Online" : "Go Online"}
              </Button>
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
            <div className="flex space-x-2 bg-card shadow-sm px-4 py-2 rounded-full border border-border">
              <button 
                onClick={() => setCurrentView('dashboard')} 
                className={`px-3 py-1 rounded-full text-sm ${currentView === 'dashboard' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentView('earnings')} 
                className={`px-3 py-1 rounded-full text-sm ${currentView === 'earnings' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              >
                Earnings
              </button>
              <button 
                onClick={() => setCurrentView('deliveries')} 
                className={`px-3 py-1 rounded-full text-sm ${currentView === 'deliveries' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              >
                Past Deliveries
              </button>
            </div>
          </div>
        </div>

        {currentView === 'dashboard' && (
          <>
            {/* Stats Overview */}
            <section className={`${responsiveSpacing.sectionSmall} pt-8`}>
              <h2 className={`${textVariants.h3} mb-4`}>Today's Overview</h2>
              
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.id} className={`${stat.highlighted ? 'border-food-primary' : ''} hover:shadow-md transition-shadow duration-200 overflow-hidden`}>
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-base font-medium">{stat.title}</CardTitle>
                      {stat.icon}
                    </CardHeader>
                    <CardContent>
                      <div className={`text-2xl font-bold ${stat.highlighted ? "text-food-primary" : ""}`}>
                        {stat.value}
                      </div>
                      {stat.highlighted && (
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="text-success-main">↑ 12%</span> from yesterday
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            {/* Current Delivery */}
            <section className={responsiveSpacing.sectionSmall}>
              <h2 className={`${textVariants.h3} mb-4`}>Current Delivery</h2>
              <Card className="overflow-hidden border-food-primary">
                <CardHeader className="bg-gradient-to-r from-food-primary/5 to-background pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Badge className="mb-2 bg-food-primary text-white">Order {currentDelivery.id}</Badge>
                      <CardTitle className="text-lg">{currentDelivery.status}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="bg-food-primary/10 text-food-primary px-3 py-1 rounded-full text-sm font-medium">
                        ETA: {currentDelivery.eta}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-food-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{currentDelivery.customer}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="flex items-center">
                          {currentDelivery.customerRating}
                          <Star className="h-3 w-3 text-food-primary ml-1 inline" />
                        </span>
                        <span className="mx-1">•</span>
                        <span>{currentDelivery.items} items</span>
                      </div>
                    </div>
                  </div>
                
                  <div className="space-y-3 bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="min-w-6 h-6 rounded-full bg-food-primary flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">P</span>
                      </div>
                      <div>
                        <p className="font-medium">Pickup</p>
                        <p className="text-sm text-muted-foreground">{currentDelivery.pickup}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="min-w-6 h-6 rounded-full bg-food-primary flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">D</span>
                      </div>
                      <div>
                        <p className="font-medium">Dropoff</p>
                        <p className="text-sm text-muted-foreground">{currentDelivery.dropoff}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Total Order Value</span>
                    <span className="font-medium">{currentDelivery.total}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-food-primary hover:bg-food-primary/90">
                      Delivered
                    </Button>
                    <Button variant="outline" className="border-food-primary text-food-primary hover:bg-food-primary/10">
                      Navigation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Upcoming Deliveries */}
            <section className={responsiveSpacing.sectionSmall}>
              <div className="flex items-center justify-between mb-4">
                <h2 className={textVariants.h3}>Upcoming Deliveries</h2>
                <Button variant="ghost" className="text-food-primary" size="sm">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingDeliveries.map((delivery, index) => (
                  <Card key={delivery.id} className={`hover:shadow-md transition-shadow duration-200 ${index === 0 ? 'border-food-secondary/50' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-medium text-sm">Order {delivery.id}</p>
                          <p className="text-xs text-muted-foreground">{delivery.customer}</p>
                        </div>
                        <Badge variant="outline" className="bg-transparent border-muted-foreground text-muted-foreground">
                          {delivery.eta}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
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
          </>
        )}

        {currentView === 'earnings' && (
          <section className={responsiveSpacing.section}>
            <h2 className={`${textVariants.h3} mb-4`}>Earnings Overview</h2>
            
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <Card className={`${cardVariants.elevated} lg:col-span-2`}>
                <CardHeader>
                  <CardTitle>Weekly Earnings</CardTitle>
                  <CardDescription>Your earnings for the past 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end space-x-2">
                    {weeklyEarnings.map((day, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div 
                          className="w-full bg-food-primary/80 hover:bg-food-primary transition-colors rounded-t-md"
                          style={{ height: `${(day.amount / 150) * 100}%` }}
                        ></div>
                        <div className="text-xs mt-2">{day.day}</div>
                        <div className="text-xs font-medium">${day.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                  <CardDescription>Your recent earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <p className="text-2xl font-bold">${totalWeeklyEarnings}</p>
                      <span className="text-xs text-success-main">↑ 8% from last week</span>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">$1,258.90</p>
                      <span className="text-xs text-success-main">↑ 12% from last month</span>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Button variant="outline" className="w-full">
                        Download Earnings Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {currentView === 'deliveries' && (
          <section className={responsiveSpacing.section}>
            <h2 className={`${textVariants.h3} mb-4`}>Past Deliveries</h2>
            
            <Card>
              <CardContent className="p-0">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/30">
                      <tr>
                        <th scope="col" className="px-6 py-3">Order ID</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Customer</th>
                        <th scope="col" className="px-6 py-3">Restaurant</th>
                        <th scope="col" className="px-6 py-3">Earnings</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-card border-b">
                        <td className="px-6 py-4 font-medium">#4320</td>
                        <td className="px-6 py-4">May 19, 2025</td>
                        <td className="px-6 py-4">Alice White</td>
                        <td className="px-6 py-4">Thai Palace</td>
                        <td className="px-6 py-4">$12.80</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-success-light text-success-main text-xs">Completed</span>
                        </td>
                      </tr>
                      <tr className="bg-card border-b">
                        <td className="px-6 py-4 font-medium">#4315</td>
                        <td className="px-6 py-4">May 18, 2025</td>
                        <td className="px-6 py-4">Robert Chen</td>
                        <td className="px-6 py-4">Burger Palace</td>
                        <td className="px-6 py-4">$9.50</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-success-light text-success-main text-xs">Completed</span>
                        </td>
                      </tr>
                      <tr className="bg-card">
                        <td className="px-6 py-4 font-medium">#4312</td>
                        <td className="px-6 py-4">May 18, 2025</td>
                        <td className="px-6 py-4">James Potter</td>
                        <td className="px-6 py-4">Pizza Heaven</td>
                        <td className="px-6 py-4">$11.25</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-success-light text-success-main text-xs">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </AppLayout>
  );
};

export default DriverApp;
