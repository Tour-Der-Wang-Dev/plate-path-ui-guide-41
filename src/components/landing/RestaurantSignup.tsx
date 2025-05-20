
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  "Expand your customer base with online ordering",
  "Increase revenue through delivery and takeout",
  "Get detailed analytics and customer insights",
  "Easy menu management with our vendor app",
  "Flexible commission plans to suit your needs",
  "24/7 support for your restaurant"
];

const RestaurantSignup = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Grow Your Restaurant Business With Us
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of successful restaurants on our platform and reach more customers than ever before. Our vendor tools make online ordering and delivery simple and profitable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link to="/vendor/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Register Your Restaurant
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            {/* Overlays for visual effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="absolute top-0 right-0 bg-primary/30 h-1/2 w-1/2 rounded-full blur-3xl -z-10" />
            
            {/* Main image */}
            <img 
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3" 
              alt="Restaurant owner on tablet" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating UI elements */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-xl z-20">
              <div className="text-sm font-medium mb-2">Monthly Performance</div>
              
              <div className="flex items-center justify-between text-xs mb-1">
                <span>New Orders</span>
                <span className="font-medium">+24% this month</span>
              </div>
              
              <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[70%] rounded-full" />
              </div>
            </div>
            
            {/* Small floating card */}
            <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg z-20 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium">Verified Restaurant</div>
                <div className="text-[10px] text-muted-foreground">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSignup;
