
# System Architecture Diagram

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Applications                            │
│                                                                         │
│   ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐   │
│   │  Customer │     │  Vendor   │     │  Driver   │     │   Admin   │   │
│   │    App    │     │    App    │     │    App    │     │ Dashboard │   │
│   └─────┬─────┘     └─────┬─────┘     └─────┬─────┘     └─────┬─────┘   │
└─────────┼─────────────────┼─────────────────┼─────────────────┼─────────┘
          │                 │                 │                 │
          │                 │                 │                 │
          │                 │                 │                 │
┌─────────▼─────────────────▼─────────────────▼─────────────────▼─────────┐
│                            React Components                              │
│                                                                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────────────┐    │
│  │   Pages    │ │   Layout   │ │    UI      │ │     Context        │    │
│  │            │ │ Components │ │ Components │ │ (Cart, Auth, etc.) │    │
│  └──────┬─────┘ └─────┬──────┘ └─────┬──────┘ └──────────┬─────────┘    │
│         │             │              │                   │              │
│         └─────────────┼──────────────┼───────────────────┘              │
│                       │              │                                  │
│  ┌───────────────────▼──────────────▼────────────────────────────┐     │
│  │                     Custom Hooks                               │     │
│  │                                                                │     │
│  │  ┌──────────┐   ┌───────────┐   ┌────────────┐   ┌─────────┐  │     │
│  │  │useOrders │   │useReviews │   │useRestaurants│  │useToast │  │     │
│  │  └────┬─────┘   └─────┬─────┘   └──────┬──────┘  └────┬────┘  │     │
│  └───────┼───────────────┼────────────────┼────────────-─┼───────┘     │
│          │               │                │               │             │
│  ┌───────▼───────────────▼────────────────▼───────────────▼────────┐   │
│  │                      API Services                               │   │
│  │                                                                 │   │
│  │  ┌────────────┐  ┌───────────┐  ┌────────────┐  ┌────────────┐ │   │
│  │  │orderService│  │reviewService│ │restaurantService│ │  mockApi  │ │   │
│  │  └─────┬──────┘  └──────┬────┘  └──────┬─────┘  └─────┬──────┘ │   │
│  └─────────────────────────┼─────────────────────────────┼─────────┘   │
│                            │                             │             │
└────────────────────────────┼─────────────────────────────┘             │
                             │                                           │
┌────────────────────────────▼───────────────────────────────────────────┐
│                             API Layer                                   │
│                                                                         │
│    ┌─────────────────────────────────────────────────────────────┐     │
│    │                    axios Instance + Interceptors            │     │
│    └─────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
                             │
                             │ HTTP Requests
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                             Backend API                                  │
│                        (Not in this repository)                          │
│                                                                         │
│   ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐   │
│   │  Order    │     │ Restaurant │     │   User    │     │  Review   │   │
│   │ Endpoints │     │ Endpoints  │     │ Endpoints │     │ Endpoints │   │
│   └─────┬─────┘     └─────┬─────┘     └─────┬─────┘     └─────┬─────┘   │
└─────────┼─────────────────┼─────────────────┼─────────────────┼─────────┘
          │                 │                 │                 │
          │                 │                 │                 │
┌─────────▼─────────────────▼─────────────────▼─────────────────▼─────────┐
│                              Database                                    │
│                                                                         │
│   ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐   │
│   │  Orders   │     │Restaurants │     │   Users   │     │  Reviews  │   │
│   │   Table   │     │   Table    │     │   Table   │     │   Table   │   │
│   └───────────┘     └───────────┘     └───────────┘     └───────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Component Flow

### Customer Flow
1. Customer logs in via `CustomerLogin`
2. Browses restaurants using `useRestaurants` hook
3. Places order through `useCreateOrder` hook
4. Tracks order status with `useOrder` hook
5. Leaves reviews using `useCreateReview` hook

### Vendor Flow
1. Vendor logs in via `VendorLogin`
2. Views incoming orders with `useVendorOrders` hook
3. Updates order status with `useUpdateOrderStatus` hook
4. Manages restaurant menu (implementation not shown)

### Driver Flow
1. Driver logs in via `DriverLogin`
2. Views available deliveries with `useDriverOrders` hook
3. Accepts tasks using `useAcceptDriverTask` hook
4. Completes deliveries with `useCompleteDelivery` hook

### Data Flow
1. UI Components trigger hooks
2. Hooks call API service functions
3. API services make HTTP requests through axios instance
4. API returns data which flows back through the layers
5. UI updates with new data

## Authentication Flow

The application uses JWT tokens stored in localStorage:
- User provides credentials
- Backend validates and returns token
- Token is stored in localStorage
- API interceptor adds token to request headers
- Protected routes check for token presence

## External Integrations

The application is prepared to integrate with:
- Payment processing services
- Mapping/GPS services
- Notification systems
- Analytics platforms

These would be implemented through additional service modules that follow the same pattern as existing services.
