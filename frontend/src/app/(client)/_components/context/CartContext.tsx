"use client";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { FoodType } from "@/app/admin/page";
// import { foodItems, FoodItemType } from "../../page";
import { AddCartButton } from "../Header component/AddCartButton";
import { toast } from "sonner";

export type CartItem = FoodType & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: FoodType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setisCartOpen: (open: boolean) => void;
  setSelectedFood: (item: FoodType | null) => void;
  selectedFood: FoodType | null;
  handleAddtoCart: (foodItems: FoodType, quantity: number) => void;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setisCartOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);

  const handleAddtoCart = (food: FoodType, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  const addToCart = (item: FoodType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        return prevItems.map((i) =>
          i._id === item?._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item?.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        setisCartOpen,
        setSelectedFood,
        selectedFood,
        handleAddtoCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
