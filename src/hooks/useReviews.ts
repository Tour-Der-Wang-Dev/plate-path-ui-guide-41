
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  createReview, 
  getRestaurantReviews, 
  getDriverReviews, 
  getCustomerReviews, 
  CreateReviewRequest 
} from '@/services/reviewService';
import { Review } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (reviewData: CreateReviewRequest) => createReview(reviewData),
    onSuccess: (data) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['restaurant-reviews', data.restaurantId] });
      if (data.driverId) {
        queryClient.invalidateQueries({ queryKey: ['driver-reviews', data.driverId] });
      }
      queryClient.invalidateQueries({ queryKey: ['customer-reviews', data.customerId] });
      
      // Also invalidate the restaurant query to update ratings
      queryClient.invalidateQueries({ queryKey: ['restaurant', data.restaurantId] });
      
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error submitting review",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useRestaurantReviews = (restaurantId?: string) => {
  const { toast } = useToast();
  
  return useQuery<Review[], Error>({
    queryKey: ['restaurant-reviews', restaurantId],
    queryFn: () => getRestaurantReviews(restaurantId as string),
    enabled: !!restaurantId,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading reviews",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useDriverReviews = (driverId?: string) => {
  const { toast } = useToast();
  
  return useQuery<Review[], Error>({
    queryKey: ['driver-reviews', driverId],
    queryFn: () => getDriverReviews(driverId as string),
    enabled: !!driverId,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading driver reviews",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useCustomerReviews = (customerId?: string) => {
  const { toast } = useToast();
  
  return useQuery<Review[], Error>({
    queryKey: ['customer-reviews', customerId],
    queryFn: () => getCustomerReviews(customerId as string),
    enabled: !!customerId,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading customer reviews",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};
