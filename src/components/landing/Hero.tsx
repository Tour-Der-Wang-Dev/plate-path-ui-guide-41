
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-60" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="py-32 md:py-48 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight animate-fade-in">
            Food Delivery, <br />
            <span className="text-primary">Simplified.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with top restaurants, enjoy seamless ordering, and experience lightning-fast delivery all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/customer/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/vendor/signup">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/20 text-white">
                Restaurant Signup
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-white/80">Restaurants</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">30 min</div>
              <div className="text-sm text-white/80">Avg. Delivery</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <div className="text-sm text-white/80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
