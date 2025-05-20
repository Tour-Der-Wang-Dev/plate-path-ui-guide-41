
import React from 'react';
import { MapPin, Navigation, Route, Clock, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cardVariants, textVariants } from '@/lib/design-system';

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
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/5 border border-white/10 dark:border-white/5">
      {/* Background map pattern with improved visual depth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-xl max-h-xl opacity-20 backdrop-blur-sm bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCAxNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjEwMCIvPgogICAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMzAwIiByPSIyMDAiLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjUwIi8+CiAgPC9nPgo8L3N2Zz4=')]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30"></div>
        </div>
      </div>
      
      {/* Main content card with enhanced neumorphic styles */}
      <div className="relative z-10 p-6 md:p-7 rounded-xl shadow-[8px_8px_16px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.2)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)] bg-gradient-to-br from-white/95 to-white/85 dark:from-background/95 dark:to-background/85 backdrop-blur-md border border-white/40 dark:border-white/10 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.12),-8px_-8px_16px_rgba(255,255,255,0.2)] dark:hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] w-full max-w-md">
        <div className="flex flex-col gap-5">
          {/* Header with modern glowing accent */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-food-primary to-food-primary/70 flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] ring-4 ring-white/20 dark:ring-black/10">
              <Navigation className="h-6 w-6 text-white drop-shadow-md" />
            </div>
            <div>
              <h3 className={cn(textVariants.h5, "bg-gradient-to-r from-food-primary to-food-primary/70 bg-clip-text text-transparent font-semibold leading-tight")}>Driver Navigation</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="block w-2 h-2 rounded-full bg-gradient-to-r from-food-success to-food-success/80 animate-pulse shadow-[0_0_5px_rgba(76,175,80,0.7)]"></span>
                <p className="text-xs text-muted-foreground">Live tracking active</p>
              </div>
            </div>
          </div>
          
          {/* Route information with enhanced visuals */}
          <div className="space-y-8 my-3">
            {/* Pickup location with glow effect */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-food-primary/30 to-food-primary/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-food-primary to-food-primary/70 shadow-[0_0_10px_rgba(255,122,0,0.7)]"></div>
                </div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-food-primary to-food-success/50 mx-auto my-1"></div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-food-primary" />
                  <p className="font-semibold text-base md:text-lg">Pickup Location</p>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  {currentDelivery.coordinates.pickup.lat.toFixed(4)}, {currentDelivery.coordinates.pickup.lng.toFixed(4)}
                </p>
                <div className="ml-6 mt-2 flex items-center gap-2">
                  <div className="text-xs px-3 py-1 bg-gradient-to-r from-food-primary/20 to-food-primary/5 text-food-primary rounded-full w-fit shadow-sm backdrop-blur-sm border border-food-primary/10">
                    Current Stop
                  </div>
                  <div className="text-xs flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Arriving now</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dropoff location with enhanced styling */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-food-success/30 to-food-success/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-food-success to-food-success/70 shadow-[0_0_10px_rgba(76,175,80,0.7)]"></div>
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-food-success" />
                  <p className="font-semibold text-base md:text-lg">Delivery Location</p>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  {currentDelivery.coordinates.dropoff.lat.toFixed(4)}, {currentDelivery.coordinates.dropoff.lng.toFixed(4)}
                </p>
                <div className="ml-6 mt-2 flex items-center gap-2">
                  <div className="text-xs px-3 py-1 bg-gradient-to-r from-food-success/20 to-food-success/5 text-food-success rounded-full w-fit shadow-sm backdrop-blur-sm border border-food-success/10">
                    Final Destination
                  </div>
                  <div className="text-xs flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>ETA: 18 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming deliveries section with enhanced card design */}
          {upcomingDeliveries.length > 0 && (
            <div className="mt-5 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 bg-gradient-to-r from-muted/50 to-muted/30 p-3 rounded-lg shadow-inner">
                <div className="p-2 rounded-full bg-gradient-to-br from-muted/60 to-muted/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.15)]">
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
        
        {/* Footer with improved styling */}
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
          <span className="flex items-center gap-1">
            <Navigation className="h-3 w-3" />
            <span>GPS Active</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="block w-2 h-2 rounded-full bg-gradient-to-r from-food-success to-food-success/80 animate-pulse shadow-[0_0_5px_rgba(76,175,80,0.7)]"></span>
            <span>Updated just now</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
