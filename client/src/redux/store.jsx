import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx"; 
import bookingReducer from "./bookingSlice";  

const store = configureStore({
  reducer: {
    cart: cartReducer,
    booking: bookingReducer,  
  },
});

export default store;
