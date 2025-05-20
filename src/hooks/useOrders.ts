
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  createOrder, 
  getOrderById, 
  getCustomerOrders, 
  getVendorOrders, 
  getDriverOrders,
  updateOrderStatus,
  acceptDriverTask,
  completeDelivery,
  cancelOrder,
  CreateOrderRequest,
  OrderQuery
} from '@/services/orderService';
import { Order, OrderStatus } from '@/types';
import { useToast } from '@/hooks/use-toast';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (orderData: CreateOrderRequest) => createOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customer-orders'] });
      toast({
        title: "Order placed successfully",
        description: "Your order has been received by the restaurant."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to place order",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useOrder = (id?: string) => {
  const { toast } = useToast();
  
  return useQuery<Order, Error>({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id as string),
    enabled: !!id,
    refetchInterval: (query) => {
      // Refetch more frequently for active orders
      if (query.state.data && ['pending', 'accepted', 'preparing', 'out_for_delivery'].includes(query.state.data.status)) {
        return 30000; // 30 seconds
      }
      return false; // Don't refetch completed orders
    },
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading order details",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useCustomerOrders = (params?: OrderQuery) => {
  const { toast } = useToast();
  
  return useQuery<Order[], Error>({
    queryKey: ['customer-orders', params],
    queryFn: () => getCustomerOrders(params),
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading orders",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useVendorOrders = (params?: OrderQuery) => {
  const { toast } = useToast();
  
  return useQuery<Order[], Error>({
    queryKey: ['vendor-orders', params],
    queryFn: () => getVendorOrders(params),
    refetchInterval: 60000, // Refetch every minute
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading vendor orders",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useDriverOrders = (params?: OrderQuery) => {
  const { toast } = useToast();
  
  return useQuery<Order[], Error>({
    queryKey: ['driver-orders', params],
    queryFn: () => getDriverOrders(params),
    refetchInterval: 60000, // Refetch every minute
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error loading driver tasks",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: OrderStatus }) => 
      updateOrderStatus(orderId, status),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['vendor-orders'] });
      toast({
        title: "Order status updated",
        description: `Order #${data.id.slice(-4)} status set to ${data.status}`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to update order status",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useAcceptDriverTask = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (orderId: string) => acceptDriverTask(orderId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['driver-orders'] });
      toast({
        title: "Delivery task accepted",
        description: `You have accepted delivery for order #${data.id.slice(-4)}`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to accept task",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useCompleteDelivery = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: (orderId: string) => completeDelivery(orderId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['driver-orders'] });
      toast({
        title: "Delivery completed",
        description: `Order #${data.id.slice(-4)} has been delivered successfully`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to complete delivery",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};

export const useCancelOrder = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: ({ orderId, reason }: { orderId: string; reason?: string }) => 
      cancelOrder(orderId, reason),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['customer-orders'] });
      queryClient.invalidateQueries({ queryKey: ['vendor-orders'] });
      toast({
        title: "Order cancelled",
        description: `Order #${data.id.slice(-4)} has been cancelled`
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to cancel order",
        description: error.message,
        variant: "destructive"
      });
    }
  });
};
