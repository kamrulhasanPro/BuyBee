"use client";
import { CartAction, CartStateType } from "@/types/types";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { json } from "stream/consumers";

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
      case "SET_CART": {
        return { ...state, cart: action.payload };
      }

      case "SET_FAVORITE": {
        return { ...state, favorite: action.payload };
      }

      case "ADD_TO_CART": {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload]),
        );

        return { ...state, cart: [...state.cart, action.payload] };
      }

      case "REMOVE_TO_CART": {
        const remaining = state.cart.filter(
          (item) => item.id !== action.payload.id,
        );

        localStorage.setItem("cart", JSON.stringify([...remaining]));

        return {
          ...state,
          cart: remaining,
        };
      }

      case "INCREASE_QTY": {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      case "DECREASE_QTY": {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        };
      }

      case "ADD_FAVORITE": {
        localStorage.setItem(
          "favorite",
          JSON.stringify([...state.favorite, action.payload.id]),
        );

        return { ...state, favorite: [...state.favorite, action.payload.id] };
      }

      case "REMOVE_FAVORITE": {
        const remaining = state.favorite.filter(
          (id) => id !== action.payload.id,
        );

        localStorage.setItem("favorite", JSON.stringify([...remaining]));
        return {
          ...state,
          favorite: remaining,
        };
      }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(storedCart) });
    }

    const storeFavorite = localStorage.getItem("favorite");
    if (storeFavorite) {
      dispatch({ type: "SET_FAVORITE", payload: JSON.parse(storeFavorite) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
