
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah J.",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "FoodDash has transformed my lunch breaks! The app is incredibly easy to use, and I love being able to track my delivery in real-time. The variety of restaurants is amazing too.",
    rating: 5
  },
  {
    name: "Michael T.",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Since joining FoodDash, our takeout orders have increased by 30%. The platform is easy to manage, and the support team is always responsive when we need help.",
    rating: 5
  },
  {
    name: "James L.",
    role: "Delivery Driver",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "The flexibility of driving for FoodDash has been a game-changer for me. I can work around my school schedule, and the app makes navigation and pickup/dropoff super straightforward.",
    rating: 4
  },
  {
    name: "Elena R.",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "I order at least twice a week through FoodDash. The selection of restaurants is unmatched, and I've discovered so many new favorite places thanks to the recommendations.",
    rating: 5
  },
  {
    name: "David K.",
    role: "Restaurant Manager",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "The analytics dashboard gives us valuable insights into our most popular dishes and peak order times. It's helped us optimize our operations and increase our revenue.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            What People Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – here's what our customers, restaurant partners, and drivers have to say.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 h-10 w-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 h-10 w-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/10 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
