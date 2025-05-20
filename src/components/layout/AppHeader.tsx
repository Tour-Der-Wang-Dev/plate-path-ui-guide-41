
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  title: string;
  type: "customer" | "vendor" | "driver" | "admin";
  onMenuClick?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  title, 
  type,
  onMenuClick 
}) => {
  // Get the base path for the current app type
  const basePath = `/${type}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <Link to={basePath} className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-food-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </span>
            <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          {type === "customer" && (
            <>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/orders`}>My Orders</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/profile`}>Profile</Link>
              </Button>
            </>
          )}
          
          {type === "vendor" && (
            <>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/orders`}>Orders</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/menu`}>Menu</Link>
              </Button>
            </>
          )}
          
          {type === "driver" && (
            <>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/deliveries`}>Deliveries</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/earnings`}>Earnings</Link>
              </Button>
            </>
          )}
          
          {type === "admin" && (
            <>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/users`}>Users</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`${basePath}/restaurants`}>Restaurants</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
