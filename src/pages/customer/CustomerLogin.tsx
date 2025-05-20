
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CustomerLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful login
    toast({
      title: "Logged in successfully",
      description: "Welcome back to Food Delivery!",
    });
    
    navigate("/customer");
  };
  
  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Log in to your customer account"
      type="customer"
      authType="login"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Button type="button" variant="link" className="p-0 h-auto text-sm">
              Forgot password?
            </Button>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <Button type="submit" className="w-full">Log in</Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button">
            Google
          </Button>
          <Button variant="outline" type="button">
            Facebook
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default CustomerLogin;
