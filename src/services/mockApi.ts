
import { Restaurant, MenuItem, Order, OrderStatus, Review, User } from '@/types';

// Mock data for restaurants
const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Burger Palace',
    description: 'Best burgers in town!',
    image: '/placeholder.svg',
    address: '123 Food St, FoodCity',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '15-25 min',
    price: '$$',
    vendorId: 'v1',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Pizza Heaven',
    description: 'Authentic Italian pizzas',
    image: '/placeholder.svg',
    address: '456 Pie Ave, FoodCity',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '20-30 min',
    price: '$$',
    vendorId: 'v2',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Sushi World',
    description: 'Fresh sushi and Japanese cuisine',
    image: '/placeholder.svg',
    address: '789 Ocean Blvd, FoodCity',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: '25-35 min',
    price: '$$$',
    vendorId: 'v3',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Taco Express',
    description: 'Authentic Mexican street food',
    image: '/placeholder.svg',
    address: '101 Spice Rd, FoodCity',
    cuisine: 'Mexican',
    rating: 4.2,
    deliveryTime: '15-25 min',
    price: '$',
    vendorId: 'v4',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Pasta Paradise',
    description: 'Homemade pasta and Italian specialties',
    image: '/placeholder.svg',
    address: '222 Noodle St, FoodCity',
    cuisine: 'Italian',
    rating: 4.4,
    deliveryTime: '20-30 min',
    price: '$$',
    vendorId: 'v5',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Curry House',
    description: 'Authentic Indian curries and dishes',
    image: '/placeholder.svg',
    address: '333 Spice Lane, FoodCity',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: '25-40 min',
    price: '$$',
    vendorId: 'v6',
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Mock menu items
const mockMenuItems: { [key: string]: MenuItem[] } = {
  '1': [
    {
      id: 'm1',
      restaurantId: '1',
      name: 'Classic Cheeseburger',
      description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
      image: '/placeholder.svg',
      price: 9.99,
      category: 'Burgers',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'm2',
      restaurantId: '1',
      name: 'Bacon Burger',
      description: 'Beef patty with bacon, cheese, lettuce, and BBQ sauce',
      image: '/placeholder.svg',
      price: 11.99,
      category: 'Burgers',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'm3',
      restaurantId: '1',
      name: 'French Fries',
      description: 'Crispy golden fries with sea salt',
      image: '/placeholder.svg',
      price: 4.99,
      category: 'Sides',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  '2': [
    {
      id: 'm4',
      restaurantId: '2',
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
      image: '/placeholder.svg',
      price: 14.99,
      category: 'Pizzas',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'm5',
      restaurantId: '2',
      name: 'Pepperoni Pizza',
      description: 'Pepperoni, mozzarella, and tomato sauce',
      image: '/placeholder.svg',
      price: 16.99,
      category: 'Pizzas',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
};

// Mock orders
let mockOrders: Order[] = [];

// Function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockRestaurantsApi = {
  getRestaurants: async (params?: { location?: string; cuisine?: string }) => {
    await delay(500); // Simulate network delay
    
    let filteredRestaurants = [...mockRestaurants];
    
    if (params?.cuisine) {
      filteredRestaurants = filteredRestaurants.filter(
        r => r.cuisine.toLowerCase() === params.cuisine?.toLowerCase()
      );
    }
    
    return filteredRestaurants;
  },
  
  getRestaurantById: async (id: string) => {
    await delay(300);
    const restaurant = mockRestaurants.find(r => r.id === id);
    
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }
    
    return restaurant;
  },
  
  getRestaurantMenu: async (restaurantId: string) => {
    await delay(400);
    return mockMenuItems[restaurantId] || [];
  }
};

export const mockOrdersApi = {
  createOrder: async (orderData: any) => {
    await delay(800);
    
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      customerId: 'c1', // Assuming logged in customer
      restaurantId: orderData.restaurantId,
      restaurant: mockRestaurants.find(r => r.id === orderData.restaurantId) as Restaurant,
      items: orderData.items.map((item: any) => ({
        id: `item-${Date.now()}-${Math.random()}`,
        orderId: `order-${Date.now()}`,
        menuItemId: item.menuItemId,
        menuItem: mockMenuItems[orderData.restaurantId].find(m => m.id === item.menuItemId) as MenuItem,
        quantity: item.quantity,
        price: (mockMenuItems[orderData.restaurantId].find(m => m.id === item.menuItemId) as MenuItem).price * item.quantity,
        specialInstructions: item.specialInstructions
      })),
      status: OrderStatus.PENDING,
      totalAmount: orderData.items.reduce((sum: number, item: any) => {
        const menuItem = mockMenuItems[orderData.restaurantId].find(m => m.id === item.menuItemId);
        return sum + ((menuItem?.price || 0) * item.quantity);
      }, 0) + 5, // Adding $5 delivery fee
      deliveryAddress: orderData.deliveryAddress,
      deliveryFee: 5,
      paymentMethod: orderData.paymentMethod,
      paymentStatus: 'paid',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    mockOrders.push(newOrder);
    return newOrder;
  },
  
  getOrderById: async (id: string) => {
    await delay(300);
    const order = mockOrders.find(o => o.id === id);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return order;
  },
  
  getCustomerOrders: async () => {
    await delay(500);
    return mockOrders.filter(o => o.customerId === 'c1'); // Assuming logged in customer
  },
  
  getVendorOrders: async (status?: OrderStatus) => {
    await delay(500);
    let orders = mockOrders.filter(o => o.restaurant.vendorId === 'v1'); // Assuming logged in vendor
    
    if (status) {
      orders = orders.filter(o => o.status === status);
    }
    
    return orders;
  },
  
  getDriverOrders: async (status?: OrderStatus) => {
    await delay(500);
    let orders = mockOrders.filter(o => o.driverId === 'd1' || !o.driverId); // Showing available orders too
    
    if (status) {
      orders = orders.filter(o => o.status === status);
    }
    
    return orders;
  },
  
  updateOrderStatus: async (orderId: string, status: OrderStatus) => {
    await delay(400);
    const orderIndex = mockOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex === -1) {
      throw new Error('Order not found');
    }
    
    mockOrders[orderIndex] = {
      ...mockOrders[orderIndex],
      status,
      updatedAt: new Date()
    };
    
    return mockOrders[orderIndex];
  },
  
  acceptDriverTask: async (orderId: string) => {
    await delay(600);
    const orderIndex = mockOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex === -1) {
      throw new Error('Order not found');
    }
    
    mockOrders[orderIndex] = {
      ...mockOrders[orderIndex],
      driverId: 'd1', // Assuming logged in driver
      status: OrderStatus.OUT_FOR_DELIVERY,
      updatedAt: new Date()
    };
    
    return mockOrders[orderIndex];
  },
  
  completeDelivery: async (orderId: string) => {
    await delay(500);
    const orderIndex = mockOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex === -1) {
      throw new Error('Order not found');
    }
    
    mockOrders[orderIndex] = {
      ...mockOrders[orderIndex],
      status: OrderStatus.DELIVERED,
      actualDeliveryTime: new Date(),
      updatedAt: new Date()
    };
    
    return mockOrders[orderIndex];
  }
};

// Mock reviews
let mockReviews: Review[] = [];

export const mockReviewsApi = {
  createReview: async (reviewData: any) => {
    await delay(600);
    
    const order = mockOrders.find(o => o.id === reviewData.orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    const newReview: Review = {
      id: `review-${Date.now()}`,
      orderId: reviewData.orderId,
      customerId: order.customerId,
      restaurantId: order.restaurantId,
      driverId: order.driverId,
      restaurantRating: reviewData.restaurantRating,
      driverRating: reviewData.driverRating,
      comment: reviewData.comment,
      createdAt: new Date()
    };
    
    mockReviews.push(newReview);
    return newReview;
  },
  
  getRestaurantReviews: async (restaurantId: string) => {
    await delay(400);
    return mockReviews.filter(r => r.restaurantId === restaurantId);
  }
};

// Initialize with some mock orders
const initializeMockData = () => {
  // Create a completed order
  mockOrders.push({
    id: 'order-1',
    customerId: 'c1',
    restaurantId: '1',
    restaurant: mockRestaurants[0],
    driverId: 'd1',
    items: [
      {
        id: 'item-1',
        orderId: 'order-1',
        menuItemId: 'm1',
        menuItem: mockMenuItems['1'][0],
        quantity: 2,
        price: mockMenuItems['1'][0].price * 2
      },
      {
        id: 'item-2',
        orderId: 'order-1',
        menuItemId: 'm3',
        menuItem: mockMenuItems['1'][2],
        quantity: 1,
        price: mockMenuItems['1'][2].price
      }
    ],
    status: OrderStatus.DELIVERED,
    totalAmount: (mockMenuItems['1'][0].price * 2) + mockMenuItems['1'][2].price + 5,
    deliveryAddress: '456 Customer St, FoodCity',
    deliveryFee: 5,
    estimatedDeliveryTime: '20-30 min',
    actualDeliveryTime: new Date(Date.now() - 3600000), // 1 hour ago
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    createdAt: new Date(Date.now() - 7200000), // 2 hours ago
    updatedAt: new Date(Date.now() - 3600000) // 1 hour ago
  });
  
  // Create a review for the completed order
  mockReviews.push({
    id: 'review-1',
    orderId: 'order-1',
    customerId: 'c1',
    restaurantId: '1',
    driverId: 'd1',
    restaurantRating: 5,
    driverRating: 4,
    comment: 'Food was amazing and delivery was quick!',
    createdAt: new Date(Date.now() - 3000000) // 50 minutes ago
  });
  
  // Create an in-progress order
  mockOrders.push({
    id: 'order-2',
    customerId: 'c1',
    restaurantId: '2',
    restaurant: mockRestaurants[1],
    items: [
      {
        id: 'item-3',
        orderId: 'order-2',
        menuItemId: 'm4',
        menuItem: mockMenuItems['2'][0],
        quantity: 1,
        price: mockMenuItems['2'][0].price
      }
    ],
    status: OrderStatus.PREPARING,
    totalAmount: mockMenuItems['2'][0].price + 5,
    deliveryAddress: '456 Customer St, FoodCity',
    deliveryFee: 5,
    estimatedDeliveryTime: '20-30 min',
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    createdAt: new Date(Date.now() - 1800000), // 30 minutes ago
    updatedAt: new Date(Date.now() - 1500000) // 25 minutes ago
  });
};

// Initialize mock data
initializeMockData();
