
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
  CreateOrderRequest
} from '@/services/orderService';
import { Order, OrderStatus } from '@/types';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (orderData: CreateOrderRequest) => createOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customer-orders'] });
      // Show success toast
    },
  });
};

export const useOrder = (id?: string) => {
  return useQuery<Order, Error>({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id as string),
    enabled: !!id,
    refetchInterval: (data) => {
      // Refetch more frequently for active orders
      if (data && ['pending', 'accepted', 'preparing', 'out_for_delivery'].includes(data.status)) {
        return 30000; // 30 seconds
      }
      return false; // Don't refetch completed orders
    },
  });
};

export const useCustomerOrders = () => {
  return useQuery<Order[], Error>({
    queryKey: ['customer-orders'],
    queryFn: () => getCustomerOrders(),
  });
};

export const useVendorOrders = (status?: OrderStatus) => {
  return useQuery<Order[], Error>({
    queryKey: ['vendor-orders', status],
    queryFn: () => getVendorOrders(status),
    refetchInterval: 60000, // Refetch every minute
  });
};

export const useDriverOrders = (status?: OrderStatus) => {
  return useQuery<Order[], Error>({
    queryKey: ['driver-orders', status],
    queryFn: () => getDriverOrders(status),
    refetchInterval: 60000, // Refetch every minute
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: OrderStatus }) => 
      updateOrderStatus(orderId, status),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['vendor-orders'] });
      // Show success toast
    },
  });
};

export const useAcceptDriverTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (orderId: string) => acceptDriverTask(orderId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['driver-orders'] });
      // Show success toast
    },
  });
};

export const useCompleteDelivery = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (orderId: string) => completeDelivery(orderId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['order', data.id] });
      queryClient.invalidateQueries({ queryKey: ['driver-orders'] });
      // Show success toast
    },
  });
};
