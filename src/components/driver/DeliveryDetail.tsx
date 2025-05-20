
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Navigation, Phone, UserIcon, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type DeliveryDetailProps = {
  delivery: any; // In a real app, we would define a proper type
  onClose: () => void;
  onComplete?: () => void;
};

const DeliveryDetail = ({ delivery, onClose, onComplete }: DeliveryDetailProps) => {
  if (!delivery) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="relative">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
          <Badge className="mb-2 bg-food-primary text-white">Order {delivery.id}</Badge>
          <CardTitle>Delivery Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Customer Information */}
          <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">{delivery.customer}</p>
              {delivery.customerPhone && (
                <p className="text-sm text-muted-foreground">{delivery.customerPhone}</p>
              )}
            </div>
            {delivery.customerPhone && (
              <Button variant="ghost" size="icon" className="ml-auto">
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
              <div>
                <p className="font-medium">Pickup</p>
                <p className="text-sm text-muted-foreground">{delivery.pickup}</p>
              </div>
            </div>
            
            <div className="h-6 border-l-2 border-dashed border-food-primary/30 ml-4"></div>
            
            <div className="flex items-start gap-3">
              <div className="min-w-8 h-8 rounded-full bg-food-primary/20 flex items-center justify-center mt-0.5">
                <MapPin className="h-4 w-4 text-food-primary" />
              </div>
              <div>
                <p className="font-medium">Dropoff</p>
                <p className="text-sm text-muted-foreground">{delivery.dropoff}</p>
              </div>
            </div>
          </div>
          
          {/* Delivery Details */}
          {delivery.items && (
            <div className="pt-2 border-t">
              <div className="flex justify-between items-center mb-2">
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
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-sm">Estimated Arrival</span>
              <Badge variant="outline" className="bg-muted/50">
                {delivery.eta}
              </Badge>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Close
          </Button>
          {onComplete ? (
            <Button className="flex-1 bg-food-success hover:bg-food-success/90" onClick={onComplete}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete
            </Button>
          ) : (
            <Button className="flex-1" variant="outline">
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
