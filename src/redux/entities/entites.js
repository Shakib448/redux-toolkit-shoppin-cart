import { combineReducers } from "redux";
import cartReducer from "../slices/cartSlice";

export default combineReducers({
  cart: cartReducer,
});
