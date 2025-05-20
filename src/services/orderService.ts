
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

export const getCustomerOrders = async () => {
  if (isDev) {
    return mockOrdersApi.getCustomerOrders();
  }
  
  const response = await api.get<Order[]>('/orders/customer');
  return response.data;
};

export const getVendorOrders = async (status?: OrderStatus) => {
  if (isDev) {
    return mockOrdersApi.getVendorOrders(status);
  }
  
  const response = await api.get<Order[]>('/orders/vendor', { 
    params: status ? { status } : undefined 
  });
  return response.data;
};

export const getDriverOrders = async (status?: OrderStatus) => {
  if (isDev) {
    return mockOrdersApi.getDriverOrders(status);
  }
  
  const response = await api.get<Order[]>('/orders/driver', { 
    params: status ? { status } : undefined 
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
