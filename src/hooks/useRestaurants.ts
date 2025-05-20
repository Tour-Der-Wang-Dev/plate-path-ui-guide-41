
import { useQuery } from '@tanstack/react-query';
import { getRestaurants, getRestaurantById, getRestaurantMenu } from '@/services/restaurantService';
import { Restaurant, MenuItem } from '@/types';

export const useRestaurants = (params?: { location?: string; cuisine?: string }) => {
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants', params],
    queryFn: () => getRestaurants(params),
  });
};

export const useRestaurant = (id?: string) => {
  return useQuery<Restaurant, Error>({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id as string),
    enabled: !!id,
  });
};

export const useRestaurantMenu = (restaurantId?: string) => {
  return useQuery<MenuItem[], Error>({
    queryKey: ['restaurant-menu', restaurantId],
    queryFn: () => getRestaurantMenu(restaurantId as string),
    enabled: !!restaurantId,
  });
};
