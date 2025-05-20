
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview, getRestaurantReviews, CreateReviewRequest } from '@/services/reviewService';
import { Review } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (reviewData: CreateReviewRequest) => createReview(reviewData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant-reviews', data.restaurantId] });
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
