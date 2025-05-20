
import React from 'react';

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
    <div className="relative w-full h-full bg-muted/20 flex items-center justify-center">
      <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Map View</h3>
        <p className="text-muted-foreground">
          A real map integration would be displayed here showing:
        </p>
        <ul className="text-left text-sm mt-3 space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-food-primary inline-block"></span>
            Current pickup location at {currentDelivery.coordinates.pickup.lat.toFixed(4)}, {currentDelivery.coordinates.pickup.lng.toFixed(4)}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-food-success inline-block"></span>
            Current dropoff location at {currentDelivery.coordinates.dropoff.lat.toFixed(4)}, {currentDelivery.coordinates.dropoff.lng.toFixed(4)}
          </li>
          {upcomingDeliveries.length > 0 && (
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-muted-foreground inline-block"></span>
              {upcomingDeliveries.length} upcoming delivery locations
            </li>
          )}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          This would typically integrate with Google Maps, Mapbox, or another mapping service
        </p>
      </div>
    </div>
  );
};

export default MapView;
