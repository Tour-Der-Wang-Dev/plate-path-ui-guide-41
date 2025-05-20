
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  type: "customer" | "vendor" | "driver" | "admin";
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  title, 
  type 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader 
        title={title} 
        type={type} 
        onMenuClick={toggleSidebar} 
      />
      
      <div className="flex flex-1">
        {/* Sidebar for tablet and desktop */}
        <aside className={`
          fixed top-16 bottom-0 w-64 border-r border-border 
          bg-background z-40 transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:block
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full p-4 gap-4">
            {type === "customer" && (
              <>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/customer">Home</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/customer/orders">My Orders</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/customer/favorites">Favorites</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/customer/profile">Profile</Link>
                </Button>
              </>
            )}
            
            {type === "vendor" && (
              <>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/vendor">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/vendor/orders">Orders</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/vendor/menu">Menu</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/vendor/analytics">Analytics</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/vendor/settings">Settings</Link>
                </Button>
              </>
            )}
            
            {type === "driver" && (
              <>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/driver">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/driver/deliveries">Deliveries</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/driver/earnings">Earnings</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/driver/profile">Profile</Link>
                </Button>
              </>
            )}
            
            {type === "admin" && (
              <>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin/users">Users</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin/restaurants">Restaurants</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin/drivers">Drivers</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin/orders">Orders</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/admin/settings">Settings</Link>
                </Button>
              </>
            )}
            
            <div className="mt-auto">
              <Button variant="outline" asChild className="w-full">
                <Link to={`/${type}/login`}>Logout</Link>
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Overlay for sidebar on mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-30 md:hidden" 
            onClick={toggleSidebar}
          />
        )}
        
        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
