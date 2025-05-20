
import api from './api';
import { Restaurant, MenuItem } from '@/types';
import { mockRestaurantsApi } from './mockApi';

// Check if we're in development mode
const isDev = import.meta.env.DEV;

export const getRestaurants = async (params?: { location?: string; cuisine?: string }) => {
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
