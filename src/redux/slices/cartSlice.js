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
  },
  reducers: {
    add: (state, action) => {
      const pdId = state.product.find((pd) => pd.id === action.payload.id);
      const addCartId = state.addCart.find((pdId) =>
        pdId.id === action.payload.id ? true : false
      );

      state.addCart.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;

// Selector

export const productList = (state) => state.entities.shoppingCart;
