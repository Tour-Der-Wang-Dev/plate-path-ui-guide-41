
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { MenuItem, OrderItem } from '@/types';
import { useToast } from '@/hooks/use-toast';

// Define the types for the cart state
interface CartState {
  restaurantId: string | null;
  items: OrderItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { menuItem: MenuItem; quantity: number; specialInstructions?: string } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Initial state
const initialState: CartState = {
  restaurantId: null,
  items: [],
  total: 0,
};

// Create the reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { menuItem, quantity, specialInstructions } = action.payload;
      
      // If adding from a different restaurant, clear the cart first
      if (state.restaurantId && state.restaurantId !== menuItem.restaurantId) {
        return {
          restaurantId: menuItem.restaurantId,
          items: [
            {
              id: `${menuItem.id}-${Date.now()}`, // Create a temporary ID
              orderId: '',
              menuItemId: menuItem.id,
              menuItem,
              quantity,
              price: menuItem.price * quantity,
              specialInstructions
            }
          ],
          total: menuItem.price * quantity
        };
      }
      
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        item => item.menuItemId === menuItem.id
      );
      
      if (existingItemIndex > -1) {
        // Update existing item
        const updatedItems = [...state.items];
        const updatedItem = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          price: menuItem.price * (updatedItems[existingItemIndex].quantity + quantity),
          specialInstructions: specialInstructions || updatedItems[existingItemIndex].specialInstructions
        };
        updatedItems[existingItemIndex] = updatedItem;
        
        return {
          ...state,
          restaurantId: menuItem.restaurantId,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price, 0)
        };
      }
      
      // Add new item
      const newItem: OrderItem = {
        id: `${menuItem.id}-${Date.now()}`, // Create a temporary ID
        orderId: '',
        menuItemId: menuItem.id,
        menuItem,
        quantity,
        price: menuItem.price * quantity,
        specialInstructions
      };
      
      return {
        ...state,
        restaurantId: menuItem.restaurantId,
        items: [...state.items, newItem],
        total: state.total + newItem.price
      };
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + item.price, 0),
        restaurantId: filteredItems.length > 0 ? state.restaurantId : null
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id } });
      }
      
      const updatedItems = state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
            price: (item.price / item.quantity) * quantity
          };
        }
        return item;
      });
      
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price, 0)
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

// Create the context
interface CartContextType {
  cart: CartState;
  addItem: (menuItem: MenuItem, quantity: number, specialInstructions?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();
  
  const addItem = (menuItem: MenuItem, quantity: number, specialInstructions?: string) => {
    // Check if adding from a different restaurant
    if (cart.restaurantId && cart.restaurantId !== menuItem.restaurantId) {
      // Show confirmation toast before clearing cart
      toast({
        title: "Start a new order?",
        description: "Your cart contains items from a different restaurant. Adding this item will clear your current cart.",
        variant: "destructive",
        action: (
          <div className="flex space-x-2">
            <button 
              onClick={() => {
                dispatch({ type: 'ADD_ITEM', payload: { menuItem, quantity, specialInstructions } });
                toast({
                  title: "Item added to cart",
                  description: `${quantity} x ${menuItem.name} added to your order.`
                });
              }}
              className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm"
            >
              Confirm
            </button>
          </div>
        )
      });
      return;
    }
    
    dispatch({ type: 'ADD_ITEM', payload: { menuItem, quantity, specialInstructions } });
    toast({
      title: "Item added to cart",
      description: `${quantity} x ${menuItem.name} added to your order.`
    });
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
