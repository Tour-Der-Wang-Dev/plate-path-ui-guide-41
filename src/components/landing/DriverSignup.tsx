
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Banknote, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-primary p-1.5" />,
    title: "Flexible Hours",
    description: "Work when you want. Set your own schedule and log in to drive whenever it fits your life."
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary p-1.5" />,
    title: "Earn Good Money",
    description: "Get paid weekly with competitive delivery fees, tips, and incentives for driving during peak hours."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary p-1.5" />,
    title: "Easy Navigation",
    description: "Our app provides turn-by-turn directions and the most efficient routes to maximize your earnings."
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary p-1.5" />,
    title: "Fast Payments",
    description: "Get paid weekly or cash out daily with our instant payment feature when you need money fast."
  }
];

const DriverSignup = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Drive & Earn With FoodDash
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Join our growing team of delivery partners and enjoy flexible hours, competitive pay, and an easy-to-use app that helps you maximize your earnings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Ready to Start Delivering?
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Sign up in minutes and start earning as soon as today. All you need is a car, scooter, or bike and a smartphone to get started.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">1</div>
                  <span>Sign up with your details and vehicle information</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">2</div>
                  <span>Complete a quick background check</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">3</div>
                  <span>Download the app and start accepting deliveries</span>
                </div>
              </div>
              
              <Link to="/driver/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Apply to Drive
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="relative h-full min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1595435934849-5767b28a5559?auto=format&fit=crop&q=80&w=2717&ixlib=rb-4.0.3" 
                alt="Food delivery driver" 
                className="rounded-xl object-cover w-full h-full shadow-lg"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-lg shadow-lg w-48">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">Today's Earnings</div>
                  <div className="text-xs text-primary">Live</div>
                </div>
                
                <div className="text-2xl font-bold mb-2">$154.25</div>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="text-success-main">↑ 12%</span>
                  <span className="mx-1">from yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSignup;
