
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const DriverLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful login
    toast({
      title: "Logged in successfully",
      description: "Welcome back to the driver platform!",
    });
    
    navigate("/driver");
  };
  
  return (
    <AuthLayout 
      title="Driver Login" 
      subtitle="Access your driver dashboard"
      type="driver"
      authType="login"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="driver@email.com" required />
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
      </form>
    </AuthLayout>
  );
};

export default DriverLogin;
