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
    addCart: [],
    count: 1,
  },
  reducers: {
    addCount: (state, action) => {
      state.count = state.count + 1;
    },
    removeCount: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { addCount, removeCount } = cartSlice.actions;

export default cartSlice.reducer;

// Selector

export const productList = (state) => state.entities.shoppingCart;
