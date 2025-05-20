
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const DriverSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful registration
    toast({
      title: "Driver account created",
      description: "Your driver account has been successfully registered!",
    });
    
    navigate("/driver");
  };
  
  return (
    <AuthLayout 
      title="Become a Driver" 
      subtitle="Join our food delivery platform as a driver"
      type="driver"
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
            <Input id="lastName" placeholder="Smith" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="driver@email.com" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select defaultValue="">
            <SelectTrigger id="vehicleType">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="motorcycle">Motorcycle</SelectItem>
              <SelectItem value="scooter">Scooter</SelectItem>
              <SelectItem value="bicycle">Bicycle</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="licenseNumber">Driver's License</Label>
          <Input id="licenseNumber" placeholder="License number" required />
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        
        <Button type="submit" className="w-full">Sign up as Driver</Button>
      </form>
    </AuthLayout>
  );
};

export default DriverSignup;
