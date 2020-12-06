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
      const { id, img, name, price } = action.payload;

      const inCart = state.cart.find((item) => item.id === action.payload.id);
      if (inCart) {
        const qtyInx = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[qtyInx].qty = action.payload.qty;
      } else {
        state.cart.push({ id, img, name, price, qty: 1, selected: true });
      }
    },
    remove: (state, action) => {
      delete state.cart[action.payload.id];
    },
    quantity: (state, action) => {
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      if (inCart) {
        const qtyInx = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[qtyInx].qty = action.payload.qty;
        state.cart[qtyInx].price = action.payload.qty * action.payload.uPrice;
      }
    },
  },
});

export const { quantity, add, remove } = cartSlice.actions;

export default cartSlice.reducer;

// Selector

export const productList = (state) => state.entities.shoppingCart;
