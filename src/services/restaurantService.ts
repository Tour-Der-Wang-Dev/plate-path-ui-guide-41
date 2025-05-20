
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
    return mockRestaurantsApi.getRestaurantsByVendor(vendorId);
  }
  
  const response = await api.get<Restaurant[]>(`/restaurants/vendor/${vendorId}`);
  return response.data;
};

export const createRestaurant = async (restaurantData: Omit<Restaurant, 'id' | 'rating' | 'createdAt' | 'updatedAt'>) => {
  if (isDev) {
    return mockRestaurantsApi.createRestaurant(restaurantData);
  }
  
  const response = await api.post<Restaurant>('/restaurants', restaurantData);
  return response.data;
};

export const updateRestaurant = async (id: string, restaurantData: Partial<Restaurant>) => {
  if (isDev) {
    return mockRestaurantsApi.updateRestaurant(id, restaurantData);
  }
  
  const response = await api.put<Restaurant>(`/restaurants/${id}`, restaurantData);
  return response.data;
};

export const createMenuItem = async (menuItemData: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  if (isDev) {
    return mockRestaurantsApi.createMenuItem(menuItemData);
  }
  
  const response = await api.post<MenuItem>('/menu-items', menuItemData);
  return response.data;
};

export const updateMenuItem = async (id: string, menuItemData: Partial<MenuItem>) => {
  if (isDev) {
    return mockRestaurantsApi.updateMenuItem(id, menuItemData);
  }
  
  const response = await api.put<MenuItem>(`/menu-items/${id}`, menuItemData);
  return response.data;
};

export const deleteMenuItem = async (id: string) => {
  if (isDev) {
    return mockRestaurantsApi.deleteMenuItem(id);
  }
  
  await api.delete(`/menu-items/${id}`);
  return { success: true };
};
