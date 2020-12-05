import { createSlice } from "@reduxjs/toolkit";

import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [
      {
        id: 1,
        name: "iPhone 11 128GB Black",
        img: product1,
        price: 1219,
      },
      {
        id: 2,
        name: "iPhone 11 Silicone Case - Black",
        img: product2,
        price: 59,
      },
    ],
    cart: [],
  },
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      const inCart = state.cart.find((item) => item.id === action.payload.id)
        ? true
        : false;

      if (inCart) {
        state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else if (!inCart) {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
    remove: (state, action) => {
      delete state.cart[action.payload.id];
    },
    addItemQuantity: (state, action) => {
      console.log(action.payload);
      state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              qty: action.payload.qty,
            }
          : item
      );
    },
  },
});

export const { addItemQuantity, add, remove } = cartSlice.actions;

export default cartSlice.reducer;

// Selector

export const productList = (state) => state.entities.shoppingCart;
