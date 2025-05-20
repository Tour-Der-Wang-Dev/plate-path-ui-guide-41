
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
    // Fix: Ensure mockRestaurantsApi has getRestaurantsByVendor method or provide fallback
    if (mockRestaurantsApi.getRestaurantsByVendor) {
      return mockRestaurantsApi.getRestaurantsByVendor(vendorId);
    }
    // Fallback if method doesn't exist
    return [] as Restaurant[];
  }
  
  const response = await api.get<Restaurant[]>(`/restaurants/vendor/${vendorId}`);
  return response.data;
};

export const createRestaurant = async (restaurantData: Omit<Restaurant, 'id' | 'rating' | 'createdAt' | 'updatedAt'>) => {
  if (isDev) {
    // Fix: Ensure mockRestaurantsApi has createRestaurant method or provide fallback
    if (mockRestaurantsApi.createRestaurant) {
      return mockRestaurantsApi.createRestaurant(restaurantData);
    }
    // Fallback if method doesn't exist
    return {
      id: `rest-${Date.now()}`,
      ...restaurantData,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    } as Restaurant;
  }
  
  const response = await api.post<Restaurant>('/restaurants', restaurantData);
  return response.data;
};

export const updateRestaurant = async (id: string, restaurantData: Partial<Restaurant>) => {
  if (isDev) {
    // Fix: Ensure mockRestaurantsApi has updateRestaurant method or provide fallback
    if (mockRestaurantsApi.updateRestaurant) {
      return mockRestaurantsApi.updateRestaurant(id, restaurantData);
    }
    // Fallback if method doesn't exist
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
    // Fix: Ensure mockRestaurantsApi has createMenuItem method or provide fallback
    if (mockRestaurantsApi.createMenuItem) {
      return mockRestaurantsApi.createMenuItem(menuItemData);
    }
    // Fallback if method doesn't exist
    return {
      id: `menu-${Date.now()}`,
      ...menuItemData,
      createdAt: new Date(),
      updatedAt: new Date()
    } as MenuItem;
  }
  
  const response = await api.post<MenuItem>('/menu-items', menuItemData);
  return response.data;
};

export const updateMenuItem = async (id: string, menuItemData: Partial<MenuItem>) => {
  if (isDev) {
    // Fix: Ensure mockRestaurantsApi has updateMenuItem method or provide fallback
    if (mockRestaurantsApi.updateMenuItem) {
      return mockRestaurantsApi.updateMenuItem(id, menuItemData);
    }
    // Fallback if method doesn't exist
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
    // Fix: Ensure mockRestaurantsApi has deleteMenuItem method or provide fallback
    if (mockRestaurantsApi.deleteMenuItem) {
      return mockRestaurantsApi.deleteMenuItem(id);
    }
    // Fallback if method doesn't exist
    return { success: true };
  }
  
  await api.delete(`/menu-items/${id}`);
  return { success: true };
};
