
import { useQuery } from '@tanstack/react-query';
import { getRestaurants, getRestaurantById, getRestaurantMenu } from '@/services/restaurantService';
import { Restaurant, MenuItem } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const useRestaurants = (params?: { location?: string; cuisine?: string }) => {
  const { toast } = useToast();
  
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants', params],
    queryFn: () => getRestaurants(params),
    onError: (error) => {
      toast({
        title: "Error loading restaurants",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useRestaurant = (id?: string) => {
  const { toast } = useToast();
  
  return useQuery<Restaurant, Error>({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id as string),
    enabled: !!id,
    onError: (error) => {
      toast({
        title: "Error loading restaurant",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useRestaurantMenu = (restaurantId?: string) => {
  const { toast } = useToast();
  
  return useQuery<MenuItem[], Error>({
    queryKey: ['restaurant-menu', restaurantId],
    queryFn: () => getRestaurantMenu(restaurantId as string),
    enabled: !!restaurantId,
    onError: (error) => {
      toast({
        title: "Error loading menu",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};
