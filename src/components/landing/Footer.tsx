
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">F</div>
              <span className="font-heading font-semibold text-xl text-white">
                FoodDash
              </span>
            </Link>
            
            <p className="text-neutral-400 mb-6 max-w-xs">
              Connecting hungry customers with amazing restaurants through fast, reliable delivery.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-400 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-primary">Contact</Link></li>
              <li><Link to="/blog" className="text-neutral-400 hover:text-primary">Blog</Link></li>
              <li><Link to="/faq" className="text-neutral-400 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          
          {/* For Customers */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Customers</h3>
            <ul className="space-y-3">
              <li><Link to="/customer/signup" className="text-neutral-400 hover:text-primary">Register</Link></li>
              <li><Link to="/customer/login" className="text-neutral-400 hover:text-primary">Login</Link></li>
              <li><Link to="/customer/orders" className="text-neutral-400 hover:text-primary">Order History</Link></li>
              <li><Link to="/customer/help" className="text-neutral-400 hover:text-primary">Help Center</Link></li>
            </ul>
          </div>
          
          {/* For Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Partners</h3>
            <ul className="space-y-3">
              <li><Link to="/vendor/signup" className="text-neutral-400 hover:text-primary">Become a Restaurant Partner</Link></li>
              <li><Link to="/driver/signup" className="text-neutral-400 hover:text-primary">Become a Driver</Link></li>
              <li><Link to="/vendor/dashboard" className="text-neutral-400 hover:text-primary">Restaurant Dashboard</Link></li>
              <li><Link to="/driver/app" className="text-neutral-400 hover:text-primary">Driver App</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} FoodDash. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Settings</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
