
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerApp = () => {
  // Sample data for restaurants
  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      image: "/placeholder.svg",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "15-25 min",
      price: "$$"
    },
    {
      id: 2,
      name: "Pizza Heaven",
      image: "/placeholder.svg",
      cuisine: "Italian",
      rating: 4.7,
      deliveryTime: "20-30 min",
      price: "$$"
    },
    {
      id: 3,
      name: "Sushi World",
      image: "/placeholder.svg",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "25-35 min",
      price: "$$$"
    },
    {
      id: 4,
      name: "Taco Express",
      image: "/placeholder.svg",
      cuisine: "Mexican",
      rating: 4.2,
      deliveryTime: "15-25 min",
      price: "$"
    },
    {
      id: 5,
      name: "Pasta Paradise",
      image: "/placeholder.svg",
      cuisine: "Italian",
      rating: 4.4,
      deliveryTime: "20-30 min",
      price: "$$"
    },
    {
      id: 6,
      name: "Curry House",
      image: "/placeholder.svg",
      cuisine: "Indian",
      rating: 4.6,
      deliveryTime: "25-40 min",
      price: "$$"
    }
  ];

  return (
    <AppLayout title="Food Delivery" type="customer">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                      <CardDescription>{restaurant.cuisine}</CardDescription>
                    </div>
                    <div className="flex items-center bg-food-primary text-white px-2 py-1 rounded-md text-sm font-medium">
                      {restaurant.rating}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex justify-between items-center text-sm">
                  <span>{restaurant.deliveryTime}</span>
                  <span className="text-muted-foreground">{restaurant.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default CustomerApp;
