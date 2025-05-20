
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
    // Safely check if the method exists on mockReviewsApi
    if (typeof (mockReviewsApi as any).getDriverReviews === 'function') {
      return (mockReviewsApi as any).getDriverReviews(driverId);
    }
    
    // Fallback implementation
    // Filter driver reviews from the mockReviews array
    return ((mockReviewsApi as any).mockReviews || [])
      .filter((review: Review) => review.driverId === driverId);
  }
  
  const response = await api.get<Review[]>(`/reviews/driver/${driverId}`);
  return response.data;
};

export const getCustomerReviews = async (customerId: string) => {
  if (isDev) {
    // Safely check if the method exists on mockReviewsApi
    if (typeof (mockReviewsApi as any).getCustomerReviews === 'function') {
      return (mockReviewsApi as any).getCustomerReviews(customerId);
    }
    
    // Fallback implementation
    // Filter customer reviews from the mockReviews array
    return ((mockReviewsApi as any).mockReviews || [])
      .filter((review: Review) => review.customerId === customerId);
  }
  
  const response = await api.get<Review[]>(`/reviews/customer/${customerId}`);
  return response.data;
};
