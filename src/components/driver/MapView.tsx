
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

type Coordinates = {
  lat: number;
  lng: number;
};

type DeliveryLocation = {
  id: string;
  coordinates: {
    pickup: Coordinates;
    dropoff: Coordinates;
  };
};

type MapViewProps = {
  currentDelivery: DeliveryLocation;
  upcomingDeliveries?: DeliveryLocation[];
};

const MapView = ({ currentDelivery, upcomingDeliveries = [] }: MapViewProps) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-muted/5 to-muted/20 flex items-center justify-center overflow-hidden rounded-xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-xl max-h-xl opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjEwMCIvPgogICAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMzAwIiByPSIyMDAiLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjUwIi8+CiAgPC9nPgo8L3N2Zz4=')]"></div>
      </div>
      <div className="relative z-10 p-7 bg-white/90 dark:bg-background/95 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-muted/10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Navigation className="h-5 w-5 text-food-primary" />
            <h3 className="font-semibold text-lg">Delivery Route</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-food-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-food-primary"></div>
                </div>
                <div className="w-0.5 h-14 bg-gradient-to-b from-food-primary to-food-success/50 mx-auto my-1"></div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Pickup Location</p>
                <p className="text-sm text-muted-foreground">
                  {currentDelivery.coordinates.pickup.lat.toFixed(4)}, {currentDelivery.coordinates.pickup.lng.toFixed(4)}
                </p>
                <div className="text-xs mt-1 px-2 py-0.5 bg-food-primary/10 text-food-primary rounded-full w-fit">
                  Current Stop
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-food-success/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-food-success"></div>
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Delivery Location</p>
                <p className="text-sm text-muted-foreground">
                  {currentDelivery.coordinates.dropoff.lat.toFixed(4)}, {currentDelivery.coordinates.dropoff.lng.toFixed(4)}
                </p>
                <div className="text-xs mt-1 px-2 py-0.5 bg-food-success/10 text-food-success rounded-full w-fit">
                  Final Destination
                </div>
              </div>
            </div>
          </div>

          {upcomingDeliveries.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{upcomingDeliveries.length} upcoming deliveries scheduled</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
          <span>Live map data</span>
          <span className="flex items-center gap-1.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-food-success animate-pulse"></span>
            Updated just now
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
