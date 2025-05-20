
import api from './api';
import { Review } from '@/types';
import { mockReviewsApi } from './mockApi';

// Check if we're in development mode
const isDev = import.meta.env.DEV;

export interface CreateReviewRequest {
  orderId: string;
  restaurantRating?: number;
  driverRating?: number;
  comment?: string;
}

export const createReview = async (reviewData: CreateReviewRequest) => {
  if (isDev) {
    return mockReviewsApi.createReview(reviewData);
  }
  
  const response = await api.post<Review>('/reviews', reviewData);
  return response.data;
};

export const getRestaurantReviews = async (restaurantId: string) => {
  if (isDev) {
    return mockReviewsApi.getRestaurantReviews(restaurantId);
  }
  
  const response = await api.get<Review[]>(`/reviews/restaurant/${restaurantId}`);
  return response.data;
};

export const getDriverReviews = async (driverId: string) => {
  if (isDev) {
    // Fix: Ensure mockReviewsApi has getDriverReviews method or provide fallback
    if (mockReviewsApi.getDriverReviews) {
      return mockReviewsApi.getDriverReviews(driverId);
    }
    // Fallback if method doesn't exist
    return [] as Review[];
  }
  
  const response = await api.get<Review[]>(`/reviews/driver/${driverId}`);
  return response.data;
};

export const getCustomerReviews = async (customerId: string) => {
  if (isDev) {
    // Fix: Ensure mockReviewsApi has getCustomerReviews method or provide fallback
    if (mockReviewsApi.getCustomerReviews) {
      return mockReviewsApi.getCustomerReviews(customerId);
    }
    // Fallback if method doesn't exist
    return [] as Review[];
  }
  
  const response = await api.get<Review[]>(`/reviews/customer/${customerId}`);
  return response.data;
};
