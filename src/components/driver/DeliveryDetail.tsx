
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Navigation, Phone, UserIcon, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

type DeliveryDetailProps = {
  delivery: any; // In a real app, we would define a proper type
  onClose: () => void;
  onComplete?: () => void;
};

const DeliveryDetail = ({ delivery, onClose, onComplete }: DeliveryDetailProps) => {
  if (!delivery) return null;

  const handlePhoneCall = () => {
    // In a real app, this would trigger the phone app
    toast({
      title: "Calling customer",
      description: `Calling ${delivery.customer} at ${delivery.customerPhone}`,
    });
  };

  const handleNavigate = () => {
    toast({
      title: "Starting navigation",
      description: "Opening navigation to dropoff location",
      variant: "default",
    });
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md border border-border/30 shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-background/95 backdrop-blur-sm">
        <CardHeader className="relative border-b pb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
          <Badge className="mb-2 bg-food-primary text-white font-medium">Order #{delivery.id}</Badge>
          <CardTitle className="text-xl">Delivery Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Customer Information */}
          <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-lg hover:bg-muted/40 transition-colors">
            <div className="h-12 w-12 rounded-full bg-food-primary/10 flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-food-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{delivery.customer}</p>
              {delivery.customerPhone && (
                <p className="text-sm text-muted-foreground">{delivery.customerPhone}</p>
              )}
            </div>
            {delivery.customerPhone && (
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-9 w-9 border-food-primary/20 hover:bg-food-primary/10 hover:text-food-primary"
                onClick={handlePhoneCall}
              >
                <Phone className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Location Information */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="min-w-8 h-8 rounded-full bg-food-primary/20 flex items-center justify-center mt-0.5">
                <MapPin className="h-4 w-4 text-food-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Pickup</p>
                <p className="text-sm text-muted-foreground">{delivery.pickup}</p>
              </div>
            </div>
            
            <div className="h-6 border-l-2 border-dashed border-food-primary/30 ml-4"></div>
            
            <div className="flex items-start gap-3">
              <div className="min-w-8 h-8 rounded-full bg-food-success/20 flex items-center justify-center mt-0.5">
                <MapPin className="h-4 w-4 text-food-success" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Dropoff</p>
                <p className="text-sm text-muted-foreground">{delivery.dropoff}</p>
              </div>
            </div>
          </div>
          
          {/* Delivery Details */}
          {delivery.items && (
            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Items</span>
                <span className="font-medium">{delivery.items}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Order Total</span>
                <span className="font-medium">{delivery.total}</span>
              </div>
            </div>
          )}
          
          {/* ETA */}
          {delivery.eta && (
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm font-medium">Estimated Arrival</span>
              <Badge variant="outline" className="bg-muted/50 font-medium">
                {delivery.eta}
              </Badge>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-3 pt-2 border-t">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Close
          </Button>
          {onComplete ? (
            <Button className="flex-1 bg-food-success hover:bg-food-success/90" onClick={onComplete}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete
            </Button>
          ) : (
            <Button className="flex-1 bg-food-primary hover:bg-food-primary/90" onClick={handleNavigate}>
              <Navigation className="h-4 w-4 mr-2" />
              Navigate
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeliveryDetail;
