
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-heading leading-tight">
            Ready to Enjoy Delicious Food at Your Doorstep?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join millions of satisfied customers and experience the convenience of food delivery with just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/customer/signup">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="flex gap-4">
              <Link to="/vendor/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Restaurant Signup
                </Button>
              </Link>
              
              <Link to="/driver/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Driver Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
