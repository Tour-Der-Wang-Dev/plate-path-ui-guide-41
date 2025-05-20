
import api from './api';
import { Restaurant, MenuItem } from '@/types';
import { mockRestaurantsApi } from './mockApi';

// Check if we're in development mode
const isDev = import.meta.env.DEV;

export interface RestaurantQuery {
  location?: string;
  cuisine?: string;
  rating?: number;
  price?: string;
  isOpen?: boolean;
}

export const getRestaurants = async (params?: RestaurantQuery) => {
  if (isDev) {
    return mockRestaurantsApi.getRestaurants(params);
  }
  
  const response = await api.get<Restaurant[]>('/restaurants', { params });
  return response.data;
};

export const getRestaurantById = async (id: string) => {
  if (isDev) {
    return mockRestaurantsApi.getRestaurantById(id);
  }
  
  const response = await api.get<Restaurant>(`/restaurants/${id}`);
  return response.data;
};

export const getRestaurantMenu = async (restaurantId: string) => {
  if (isDev) {
    return mockRestaurantsApi.getRestaurantMenu(restaurantId);
  }
  
  const response = await api.get<MenuItem[]>(`/restaurants/${restaurantId}/menu`);
  return response.data;
};

export const getRestaurantsByVendor = async (vendorId: string) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.getRestaurantsByVendor) {
      return mockRestaurantsApi.getRestaurantsByVendor(vendorId);
    }
    
    // Fallback implementation if method doesn't exist
    // Filter restaurants by vendorId from the mockRestaurants array
    return ((mockRestaurantsApi as any).mockRestaurants || [])
      .filter((restaurant: Restaurant) => restaurant.vendorId === vendorId);
  }
  
  const response = await api.get<Restaurant[]>(`/restaurants/vendor/${vendorId}`);
  return response.data;
};

export const createRestaurant = async (restaurantData: Omit<Restaurant, 'id' | 'rating' | 'createdAt' | 'updatedAt'>) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.createRestaurant) {
      return mockRestaurantsApi.createRestaurant(restaurantData);
    }
    
    // Fallback implementation
    const newRestaurant: Restaurant = {
      id: `rest-${Date.now()}`,
      ...restaurantData,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Add to mock data if possible
    if ((mockRestaurantsApi as any).mockRestaurants) {
      (mockRestaurantsApi as any).mockRestaurants.push(newRestaurant);
    }
    
    return newRestaurant;
  }
  
  const response = await api.post<Restaurant>('/restaurants', restaurantData);
  return response.data;
};

export const updateRestaurant = async (id: string, restaurantData: Partial<Restaurant>) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.updateRestaurant) {
      return mockRestaurantsApi.updateRestaurant(id, restaurantData);
    }
    
    // Fallback implementation
    if ((mockRestaurantsApi as any).mockRestaurants) {
      const restaurantIndex = (mockRestaurantsApi as any).mockRestaurants.findIndex(
        (r: Restaurant) => r.id === id
      );
      
      if (restaurantIndex !== -1) {
        const updatedRestaurant = {
          ...(mockRestaurantsApi as any).mockRestaurants[restaurantIndex],
          ...restaurantData,
          updatedAt: new Date()
        };
        
        (mockRestaurantsApi as any).mockRestaurants[restaurantIndex] = updatedRestaurant;
        return updatedRestaurant;
      }
    }
    
    // Default fallback
    return {
      id,
      ...restaurantData,
      updatedAt: new Date()
    } as Restaurant;
  }
  
  const response = await api.put<Restaurant>(`/restaurants/${id}`, restaurantData);
  return response.data;
};

export const createMenuItem = async (menuItemData: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.createMenuItem) {
      return mockRestaurantsApi.createMenuItem(menuItemData);
    }
    
    // Fallback implementation
    const newMenuItem: MenuItem = {
      id: `menu-${Date.now()}`,
      ...menuItemData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Add to mock data if possible
    if ((mockRestaurantsApi as any).mockMenuItems) {
      const restaurantId = menuItemData.restaurantId;
      if (!(mockRestaurantsApi as any).mockMenuItems[restaurantId]) {
        (mockRestaurantsApi as any).mockMenuItems[restaurantId] = [];
      }
      (mockRestaurantsApi as any).mockMenuItems[restaurantId].push(newMenuItem);
    }
    
    return newMenuItem;
  }
  
  const response = await api.post<MenuItem>('/menu-items', menuItemData);
  return response.data;
};

export const updateMenuItem = async (id: string, menuItemData: Partial<MenuItem>) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.updateMenuItem) {
      return mockRestaurantsApi.updateMenuItem(id, menuItemData);
    }
    
    // Fallback implementation
    if ((mockRestaurantsApi as any).mockMenuItems) {
      const restaurantId = menuItemData.restaurantId;
      if (restaurantId && (mockRestaurantsApi as any).mockMenuItems[restaurantId]) {
        const menuItemIndex = (mockRestaurantsApi as any).mockMenuItems[restaurantId].findIndex(
          (item: MenuItem) => item.id === id
        );
        
        if (menuItemIndex !== -1) {
          const updatedMenuItem = {
            ...(mockRestaurantsApi as any).mockMenuItems[restaurantId][menuItemIndex],
            ...menuItemData,
            updatedAt: new Date()
          };
          
          (mockRestaurantsApi as any).mockMenuItems[restaurantId][menuItemIndex] = updatedMenuItem;
          return updatedMenuItem;
        }
      }
    }
    
    // Default fallback
    return {
      id,
      ...menuItemData,
      updatedAt: new Date()
    } as MenuItem;
  }
  
  const response = await api.put<MenuItem>(`/menu-items/${id}`, menuItemData);
  return response.data;
};

export const deleteMenuItem = async (id: string) => {
  if (isDev) {
    // Direct implementation instead of checking if method exists
    if (mockRestaurantsApi.deleteMenuItem) {
      return mockRestaurantsApi.deleteMenuItem(id);
    }
    
    // Fallback implementation
    if ((mockRestaurantsApi as any).mockMenuItems) {
      for (const restaurantId in (mockRestaurantsApi as any).mockMenuItems) {
        const menuItems = (mockRestaurantsApi as any).mockMenuItems[restaurantId];
        const menuItemIndex = menuItems.findIndex((item: MenuItem) => item.id === id);
        
        if (menuItemIndex !== -1) {
          menuItems.splice(menuItemIndex, 1);
          break;
        }
      }
    }
    
    return { success: true };
  }
  
  await api.delete(`/menu-items/${id}`);
  return { success: true };
};
