
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface AppHeaderProps {
  transparent?: boolean;
  userType?: 'customer' | 'vendor' | 'driver' | 'admin';
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

export function AppHeader({ 
  transparent = false, 
  userType, 
  isLoggedIn = false,
  userName = '',
  userAvatar = ''
}: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get initial for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Our Apps', 
      href: '#', 
      children: [
        { label: 'For Customers', href: '/customer' },
        { label: 'For Restaurants', href: '/vendor' },
        { label: 'For Drivers', href: '/driver' }
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`w-full py-4 ${
        transparent 
          ? 'bg-transparent absolute top-0 left-0 z-10'
          : 'bg-background border-b border-border'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">F</div>
          <span className={`font-heading font-semibold text-xl ${transparent ? 'text-white' : 'text-foreground'}`}>
            FoodDash
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationLinks.map((link, index) => (
            link.children ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`flex items-center gap-1 ${transparent ? 'text-white hover:bg-white/10' : ''}`}>
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {link.children.map((child, childIndex) => (
                    <DropdownMenuItem key={childIndex} asChild>
                      <Link to={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                key={index} 
                to={link.href} 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  transparent ? 'text-white hover:text-white/80' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* User Menu or Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 p-1 hover:bg-accent rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(userName)}
                    </AvatarFallback>
                  </Avatar>
                  <span className={transparent ? 'text-white' : ''}>
                    {userName.split(' ')[0]}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to={`/${userType}/profile`} className="cursor-pointer">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                {userType === 'customer' && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/customer/orders" className="cursor-pointer">
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/customer/favorites" className="cursor-pointer">
                        Favorites
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                {userType === 'vendor' && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/vendor/menu" className="cursor-pointer">
                        Manage Menu
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/vendor/orders" className="cursor-pointer">
                        Orders
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                {userType === 'driver' && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/driver/deliveries" className="cursor-pointer">
                        My Deliveries
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/driver/earnings" className="cursor-pointer">
                        Earnings
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to={`/${userType || 'customer'}/login`}>
                <Button variant="ghost" className={transparent ? 'text-white hover:bg-white/10' : ''}>
                  Login
                </Button>
              </Link>
              <Link to={`/${userType || 'customer'}/signup`}>
                <Button className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${transparent ? 'text-white' : 'text-foreground'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${transparent ? 'text-white' : 'text-foreground'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-background p-4 overflow-y-auto">
            <nav className="flex flex-col gap-2 mb-8">
              {navigationLinks.map((link, index) => (
                <div key={index}>
                  {link.children ? (
                    <>
                      <div className="font-medium py-2">{link.label}</div>
                      <div className="ml-4 flex flex-col gap-2 mb-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.href}
                            className="text-sm text-muted-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="font-medium py-2 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={userAvatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(userName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{userName}</p>
                    <p className="text-sm text-muted-foreground capitalize">{userType || 'User'}</p>
                  </div>
                </div>
                
                <Link to={`/${userType}/profile`} className="py-2 px-2 hover:bg-accent rounded-md">
                  My Profile
                </Link>
                
                {userType === 'customer' && (
                  <>
                    <Link to="/customer/orders" className="py-2 px-2 hover:bg-accent rounded-md">
                      My Orders
                    </Link>
                    <Link to="/customer/favorites" className="py-2 px-2 hover:bg-accent rounded-md">
                      Favorites
                    </Link>
                  </>
                )}
                
                <button 
                  className="text-left py-2 px-2 text-destructive hover:bg-destructive/10 rounded-md mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link 
                  to={`/${userType || 'customer'}/login`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link 
                  to={`/${userType || 'customer'}/signup`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default AppHeader;
