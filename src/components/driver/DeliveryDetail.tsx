
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
      <Card className="w-full max-w-md border border-white/20 dark:border-white/5 shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.1)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.03)] bg-gradient-to-br from-white/95 to-white/85 dark:from-background/95 dark:to-background/90 backdrop-blur-md">
        <CardHeader className="relative border-b border-border/30 pb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 hover:bg-muted transition-colors rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
          <Badge className="mb-2 bg-gradient-to-r from-food-primary to-food-primary/80 text-white font-medium border-none shadow-sm">
            Order #{delivery.id}
          </Badge>
          <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
            Delivery Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Customer Information */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-muted/40 to-muted/20 p-4 rounded-lg hover:shadow-sm transition-all duration-300 border border-white/10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-food-primary/15 to-food-primary/5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center">
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
                className="rounded-full h-9 w-9 border-food-primary/20 bg-white/50 dark:bg-background/50 hover:bg-food-primary/10 hover:text-food-primary shadow-sm"
                onClick={handlePhoneCall}
              >
                <Phone className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Location Information */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="min-w-8 h-8 rounded-full bg-gradient-to-br from-food-primary/15 to-food-primary/5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center mt-0.5">
                <MapPin className="h-4 w-4 text-food-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Pickup</p>
                <p className="text-sm text-muted-foreground">{delivery.pickup}</p>
              </div>
            </div>
            
            <div className="h-6 border-l-2 border-dashed border-food-primary/30 ml-4"></div>
            
            <div className="flex items-start gap-3">
              <div className="min-w-8 h-8 rounded-full bg-gradient-to-br from-food-success/15 to-food-success/5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center mt-0.5">
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
            <div className="pt-4 border-t border-border/30 space-y-2">
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
            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <span className="text-sm font-medium">Estimated Arrival</span>
              <Badge variant="outline" className="bg-muted/50 font-medium border border-white/10 shadow-sm">
                {delivery.eta}
              </Badge>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-3 pt-2 border-t border-border/30">
          <Button 
            variant="outline" 
            className="flex-1 bg-white/50 dark:bg-background/50 shadow-sm border-white/20 dark:border-white/5" 
            onClick={onClose}
          >
            Close
          </Button>
          {onComplete ? (
            <Button 
              className="flex-1 bg-gradient-to-r from-food-success to-food-success/80 hover:opacity-90 border-none shadow-sm" 
              onClick={onComplete}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete
            </Button>
          ) : (
            <Button 
              className="flex-1 bg-gradient-to-r from-food-primary to-food-primary/80 hover:opacity-90 border-none shadow-sm" 
              onClick={handleNavigate}
            >
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
