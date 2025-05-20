
import React from 'react';
import { Search, Clock, MapPin, Star } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Discover Local Cuisine",
    description: "Explore a vast selection of restaurants, from hidden gems to your favorite chains. Filter by cuisine, distance, price, and dietary preferences."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Real-time Tracking",
    description: "Track your order in real-time from kitchen to doorstep. Know exactly when your food will arrive with accurate delivery estimates."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Delivery Anywhere",
    description: "Whether at home, the office, or a park, we deliver wherever you are. Save multiple addresses for quick ordering."
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Ratings & Reviews",
    description: "Make informed choices with authentic customer reviews and ratings. Share your own experiences to help the community."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform connects hungry customers with amazing restaurants, making food delivery simple and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover-scale transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
