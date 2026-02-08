"use client";
import { CartAction, CartStateType } from "@/types/types";
import React, { createContext, useReducer } from "react";

// create context
type CartContextType = {
  state: CartStateType;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | null>(null);

// provider component
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // initial state
  const initialState: CartStateType = {
    cart: [],
    favorite: [],
  };

  // reducer function
  function reducer(state: CartStateType, action: CartAction) {
    switch (action.type) {
      case "ADD_TO_CART": {
        return { ...state, cart: [...state.cart, action.payload] };
      }

      case "REMOVE_TO_CART": {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }

      case "ADD_FAVORITE": {
        return { ...state, favorite: [...state.favorite, action.payload.id] };
      }

      case "REMOVE_FAVORITE": {
        return {
          ...state,
          favorite: state.favorite.filter((id) => id !== action.payload.id),
        };
      }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
