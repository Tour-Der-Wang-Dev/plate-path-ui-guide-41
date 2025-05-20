
import api from './api';
import { Order, OrderStatus } from '@/types';
import { mockOrdersApi } from './mockApi';

// Check if we're in development mode
const isDev = import.meta.env.DEV;

export interface CreateOrderRequest {
  restaurantId: string;
  items: {
    menuItemId: string;
    quantity: number;
    specialInstructions?: string;
  }[];
  deliveryAddress: string;
  paymentMethod: string;
  notes?: string;
}

export interface OrderQuery {
  status?: OrderStatus;
  fromDate?: string;
  toDate?: string;
  limit?: number;
}

export const createOrder = async (orderData: CreateOrderRequest) => {
  if (isDev) {
    return mockOrdersApi.createOrder(orderData);
  }
  
  const response = await api.post<Order>('/orders', orderData);
  return response.data;
};

export const getOrderById = async (id: string) => {
  if (isDev) {
    return mockOrdersApi.getOrderById(id);
  }
  
  const response = await api.get<Order>(`/orders/${id}`);
  return response.data;
};

export const getCustomerOrders = async (params?: OrderQuery) => {
  if (isDev) {
    // No need to pass params to mock API if it doesn't support them
    return mockOrdersApi.getCustomerOrders();
  }
  
  const response = await api.get<Order[]>('/orders/customer', { 
    params
  });
  return response.data;
};

export const getVendorOrders = async (params?: OrderQuery) => {
  if (isDev) {
    return mockOrdersApi.getVendorOrders(params?.status);
  }
  
  const response = await api.get<Order[]>('/orders/vendor', { 
    params
  });
  return response.data;
};

export const getDriverOrders = async (params?: OrderQuery) => {
  if (isDev) {
    return mockOrdersApi.getDriverOrders(params?.status);
  }
  
  const response = await api.get<Order[]>('/orders/driver', { 
    params
  });
  return response.data;
};

export const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
  if (isDev) {
    return mockOrdersApi.updateOrderStatus(orderId, status);
  }
  
  const response = await api.patch<Order>(`/orders/${orderId}/status`, { status });
  return response.data;
};

export const acceptDriverTask = async (orderId: string) => {
  if (isDev) {
    return mockOrdersApi.acceptDriverTask(orderId);
  }
  
  const response = await api.post<Order>(`/orders/${orderId}/accept-delivery`);
  return response.data;
};

export const completeDelivery = async (orderId: string) => {
  if (isDev) {
    return mockOrdersApi.completeDelivery(orderId);
  }
  
  const response = await api.post<Order>(`/orders/${orderId}/complete-delivery`);
  return response.data;
};

export const cancelOrder = async (orderId: string, reason?: string) => {
  if (isDev) {
    // Safely check if the cancelOrder method exists on mockOrdersApi
    if (typeof (mockOrdersApi as any).cancelOrder === 'function') {
      return (mockOrdersApi as any).cancelOrder(orderId, reason);
    }
    
    // If mockOrdersApi.cancelOrder doesn't exist, provide a fallback implementation
    const orderIndex = (mockOrdersApi as any).mockOrders?.findIndex((o: Order) => o.id === orderId);
    if (orderIndex !== -1 && orderIndex !== undefined) {
      const updatedOrder = {
        ...(mockOrdersApi as any).mockOrders[orderIndex],
        status: OrderStatus.CANCELLED,
        updateAt: new Date()
      };
      (mockOrdersApi as any).mockOrders[orderIndex] = updatedOrder;
      return updatedOrder;
    }
    
    // Default fallback
    return { id: orderId, status: OrderStatus.CANCELLED } as Order;
  }
  
  const response = await api.post<Order>(`/orders/${orderId}/cancel`, { reason });
  return response.data;
};
