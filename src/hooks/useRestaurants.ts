import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getRestaurants, 
  getRestaurantById, 
  getRestaurantMenu,
  getRestaurantsByVendor,
  createRestaurant,
  updateRestaurant,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  RestaurantQuery
} from '@/services/restaurantService';
import { Restaurant, MenuItem } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const useRestaurants = (params?: RestaurantQuery) => {
  const { toast } = useToast();
  
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants', params],
    queryFn: () => getRestaurants(params),
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading restaurants",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useRestaurant = (id?: string) => {
  const { toast } = useToast();
  
  return useQuery<Restaurant, Error>({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id as string),
    enabled: !!id,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading restaurant",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useRestaurantMenu = (restaurantId?: string) => {
  const { toast } = useToast();
  
  return useQuery<MenuItem[], Error>({
    queryKey: ['restaurant-menu', restaurantId],
    queryFn: () => getRestaurantMenu(restaurantId as string),
    enabled: !!restaurantId,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading menu",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useVendorRestaurants = (vendorId?: string) => {
  const { toast } = useToast();
  
  return useQuery<Restaurant[], Error>({
    queryKey: ['vendor-restaurants', vendorId],
    queryFn: () => getRestaurantsByVendor(vendorId as string),
    enabled: !!vendorId,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading vendor restaurants",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useCreateRestaurant = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (restaurantData: Omit<Restaurant, 'id' | 'rating' | 'createdAt' | 'updatedAt'>) => 
      createRestaurant(restaurantData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['vendor-restaurants', data.vendorId] });
      toast({
        title: "Restaurant created",
        description: `${data.name} has been successfully created`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to create restaurant",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useUpdateRestaurant = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Restaurant> }) => 
      updateRestaurant(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant', data.id] });
      queryClient.invalidateQueries({ queryKey: ['vendor-restaurants', data.vendorId] });
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
      toast({
        title: "Restaurant updated",
        description: `${data.name} has been successfully updated`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to update restaurant",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useCreateMenuItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (menuItemData: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => 
      createMenuItem(menuItemData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant-menu', data.restaurantId] });
      toast({
        title: "Menu item created",
        description: `${data.name} has been added to the menu`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to create menu item",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useUpdateMenuItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MenuItem> }) => 
      updateMenuItem(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant-menu', data.restaurantId] });
      toast({
        title: "Menu item updated",
        description: `${data.name} has been updated`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to update menu item",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useDeleteMenuItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ id, restaurantId }: { id: string; restaurantId: string }) => 
      deleteMenuItem(id).then(() => ({ id, restaurantId })),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant-menu', data.restaurantId] });
      toast({
        title: "Menu item deleted",
        description: "The menu item has been removed"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to delete menu item",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};
