
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 md:px-6 bg-background sticky top-0 z-50 border-b">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-food-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold">FoodDelivery</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link to="/#how-it-works" className="text-muted-foreground hover:text-foreground">How it works</Link>
            <Link to="/#apps" className="text-muted-foreground hover:text-foreground">Our apps</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/customer/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/customer/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Food Delivery Made <span className="text-food-primary">Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              A comprehensive platform connecting customers, vendors, and drivers
              for seamless food delivery experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/customer/signup">Order Food Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vendor/signup">Register Your Restaurant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apps Section */}
      <section id="apps" className="py-20 px-4 md:px-6 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Customer App */}
            <div className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-md transition-shadow">
              <div className="mb-6 h-12 w-12 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer App</h3>
              <p className="text-muted-foreground mb-6">
                Browse restaurants, place orders, and track deliveries in real-time.
              </p>
              <Button variant="link" asChild className="pl-0">
                <Link to="/customer" className="flex items-center">
                  Try it <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Vendor App */}
            <div className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-md transition-shadow">
              <div className="mb-6 h-12 w-12 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><path d="M3 3h18v18H3z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Vendor App</h3>
              <p className="text-muted-foreground mb-6">
                Manage your restaurant, update menus, and process orders efficiently.
              </p>
              <Button variant="link" asChild className="pl-0">
                <Link to="/vendor" className="flex items-center">
                  Try it <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Driver App */}
            <div className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-md transition-shadow">
              <div className="mb-6 h-12 w-12 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Driver App</h3>
              <p className="text-muted-foreground mb-6">
                Accept delivery requests, navigate efficiently, and track earnings.
              </p>
              <Button variant="link" asChild className="pl-0">
                <Link to="/driver" className="flex items-center">
                  Try it <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Admin Dashboard */}
            <div className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-md transition-shadow">
              <div className="mb-6 h-12 w-12 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Admin Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive tools to manage users, restaurants, and platform operations.
              </p>
              <Button variant="link" asChild className="pl-0">
                <Link to="/admin" className="flex items-center">
                  Try it <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Notifications</h3>
              <p className="text-muted-foreground">
                Instant updates on order status, delivery progress, and more.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">GPS Tracking</h3>
              <p className="text-muted-foreground">
                Follow your delivery in real-time with accurate GPS tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-food-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-primary"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance for all platform users.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 md:px-6 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="mb-6 relative">
                <div className="h-16 w-16 rounded-full bg-food-primary flex items-center justify-center text-white font-bold text-xl mx-auto">
                  1
                </div>
                <div className="absolute top-8 left-full h-1 w-full bg-food-primary hidden md:block -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Browse & Order</h3>
              <p className="text-muted-foreground">
                Explore restaurants and menu items to place your order.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 relative">
                <div className="h-16 w-16 rounded-full bg-food-primary flex items-center justify-center text-white font-bold text-xl mx-auto">
                  2
                </div>
                <div className="absolute top-8 left-full h-1 w-full bg-food-primary hidden md:block -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Restaurant Prepares</h3>
              <p className="text-muted-foreground">
                The restaurant receives and prepares your delicious meal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="h-16 w-16 rounded-full bg-food-primary flex items-center justify-center text-white font-bold text-xl mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery to You</h3>
              <p className="text-muted-foreground">
                Our driver brings the food directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-food-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify food delivery?</h2>
            <p className="text-lg mb-8">
              Join our platform today and experience the future of food delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/customer/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Customer</h3>
              <ul className="space-y-2">
                <li><Link to="/customer/login" className="text-muted-foreground hover:text-foreground">Login</Link></li>
                <li><Link to="/customer/signup" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">How to Order</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Vendor</h3>
              <ul className="space-y-2">
                <li><Link to="/vendor/login" className="text-muted-foreground hover:text-foreground">Login</Link></li>
                <li><Link to="/vendor/signup" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">How to Register</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Driver</h3>
              <ul className="space-y-2">
                <li><Link to="/driver/login" className="text-muted-foreground hover:text-foreground">Login</Link></li>
                <li><Link to="/driver/signup" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Become a Driver</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-food-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold">FoodDelivery</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FoodDelivery Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
