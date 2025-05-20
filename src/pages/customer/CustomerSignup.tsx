
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CustomerSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful registration
    toast({
      title: "Account created",
      description: "Welcome to Food Delivery!",
    });
    
    navigate("/customer");
  };
  
  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Sign up for a customer account"
      type="customer"
      authType="signup"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
        </div>
        
        <Button type="submit" className="w-full">Sign up</Button>
        
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

export default CustomerSignup;
