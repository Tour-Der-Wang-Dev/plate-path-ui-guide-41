
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview, getRestaurantReviews, CreateReviewRequest } from '@/services/reviewService';
import { Review } from '@/types';

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (reviewData: CreateReviewRequest) => createReview(reviewData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['restaurant-reviews', data.restaurantId] });
      // Show success toast
    },
  });
};

export const useRestaurantReviews = (restaurantId?: string) => {
  return useQuery<Review[], Error>({
    queryKey: ['restaurant-reviews', restaurantId],
    queryFn: () => getRestaurantReviews(restaurantId as string),
    enabled: !!restaurantId,
  });
};
