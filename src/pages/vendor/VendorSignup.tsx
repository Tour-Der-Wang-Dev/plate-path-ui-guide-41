
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const VendorSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful registration
    toast({
      title: "Restaurant registered",
      description: "Your restaurant has been successfully registered!",
    });
    
    navigate("/vendor");
  };
  
  return (
    <AuthLayout 
      title="Register Your Restaurant" 
      subtitle="Join our platform as a food vendor"
      type="vendor"
      authType="signup"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Restaurant Name</Label>
          <Input id="restaurantName" placeholder="Delicious Bites" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Business Email</Label>
          <Input id="email" type="email" placeholder="restaurant@email.com" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Business Phone</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cuisine">Cuisine Type</Label>
          <Select defaultValue="">
            <SelectTrigger id="cuisine">
              <SelectValue placeholder="Select cuisine type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="american">American</SelectItem>
              <SelectItem value="italian">Italian</SelectItem>
              <SelectItem value="mexican">Mexican</SelectItem>
              <SelectItem value="asian">Asian</SelectItem>
              <SelectItem value="indian">Indian</SelectItem>
              <SelectItem value="mediterranean">Mediterranean</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Restaurant Address</Label>
          <Textarea id="address" placeholder="123 Food Street, Cuisine City" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Restaurant Description</Label>
          <Textarea id="description" placeholder="Tell customers about your restaurant, specialties, and history" />
        </div>
        
        <Button type="submit" className="w-full">Register Restaurant</Button>
      </form>
    </AuthLayout>
  );
};

export default VendorSignup;
