
// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  type: 'customer' | 'vendor' | 'driver' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Restaurant Types
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  address: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  price: string; // '$', '$$', '$$$', etc.
  vendorId: string;
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Menu Types
export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Order Types
export enum OrderStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  PREPARING = 'preparing',
  READY_FOR_PICKUP = 'ready_for_pickup',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

export interface OrderItem {
  id: string;
  orderId: string;
  menuItemId: string;
  menuItem: MenuItem;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  customerId: string;
  restaurantId: string;
  restaurant: Restaurant;
  driverId?: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress: string;
  deliveryFee: number;
  estimatedDeliveryTime?: string;
  actualDeliveryTime?: Date;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  orderId: string;
  customerId: string;
  restaurantId: string;
  driverId?: string;
  restaurantRating?: number;
  driverRating?: number;
  comment?: string;
  createdAt: Date;
}
