
import React from 'react';
import { MapPin, Navigation, Route } from 'lucide-react';

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
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-muted/10 to-muted/5 border border-white/5 dark:border-white/10">
      {/* Background map pattern with improved opacity and blur effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-xl max-h-xl opacity-15 backdrop-blur-sm bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjEwMCIvPgogICAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMzAwIiByPSIyMDAiLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjUwIi8+CiAgPC9nPgo8L3N2Zz4=')]"></div>
      </div>
      
      {/* Main content card with enhanced neumorphic styles */}
      <div className="relative z-10 p-6 md:p-7 rounded-xl shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.15)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)] bg-gradient-to-br from-white/95 to-white/85 dark:from-background/95 dark:to-background/85 backdrop-blur-md border border-white/30 dark:border-white/10 transition-all duration-300 hover:shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.15)] dark:hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)] w-full max-w-md">
        <div className="flex flex-col gap-5">
          {/* Header with enhanced visual styling */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-food-primary to-food-primary/80 flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]">
              <Navigation className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl bg-gradient-to-r from-food-primary to-food-primary/70 bg-clip-text text-transparent">Delivery Route</h3>
              <p className="text-xs text-muted-foreground">Live navigation</p>
            </div>
          </div>
          
          {/* Route information with enhanced visuals */}
          <div className="space-y-8 my-2">
            {/* Pickup location with improved styling */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-food-primary/20 to-food-primary/5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-food-primary to-food-primary/70 shadow-[0_0_8px_rgba(255,122,0,0.5)]"></div>
                </div>
                <div className="w-0.5 h-16 bg-gradient-to-b from-food-primary to-food-success/50 mx-auto my-1"></div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-base md:text-lg">Pickup Location</p>
                <p className="text-sm text-muted-foreground">
                  {currentDelivery.coordinates.pickup.lat.toFixed(4)}, {currentDelivery.coordinates.pickup.lng.toFixed(4)}
                </p>
                <div className="text-xs mt-2 px-3 py-1 bg-gradient-to-r from-food-primary/20 to-food-primary/5 text-food-primary rounded-full w-fit shadow-sm backdrop-blur-sm border border-food-primary/10">
                  Current Stop
                </div>
              </div>
            </div>
            
            {/* Dropoff location with improved styling */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-food-success/20 to-food-success/5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-food-success to-food-success/70 shadow-[0_0_8px_rgba(76,175,80,0.5)]"></div>
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-base md:text-lg">Delivery Location</p>
                <p className="text-sm text-muted-foreground">
                  {currentDelivery.coordinates.dropoff.lat.toFixed(4)}, {currentDelivery.coordinates.dropoff.lng.toFixed(4)}
                </p>
                <div className="text-xs mt-2 px-3 py-1 bg-gradient-to-r from-food-success/20 to-food-success/5 text-food-success rounded-full w-fit shadow-sm backdrop-blur-sm border border-food-success/10">
                  Final Destination
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming deliveries section with improved styling */}
          {upcomingDeliveries.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 bg-muted/30 p-2 rounded-lg">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-muted/50 to-muted/30 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.1)]">
                  <Route className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">{upcomingDeliveries.length} upcoming {upcomingDeliveries.length === 1 ? 'delivery' : 'deliveries'}</p>
                  <p className="text-xs text-muted-foreground">Scheduled for today</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer with improved visual style */}
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
          <span>Live map data</span>
          <span className="flex items-center gap-1.5">
            <span className="block w-2 h-2 rounded-full bg-gradient-to-r from-food-success to-food-success/80 animate-pulse shadow-[0_0_5px_rgba(76,175,80,0.5)]"></span>
            Updated just now
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
