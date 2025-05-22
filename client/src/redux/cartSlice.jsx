import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    bookingDetails: null, // Add bookingDetails field
  },
  reducers: {
    addtoCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].piece += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    clearItems: (state) => {
      state.cart = [];
    },
    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, piece } = cartItem;
          const itemTotal = price * piece;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += piece;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, piece: item.piece + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, piece: item.piece - 1 };
        }
        return item;
      });
    },

    // New action to set booking details
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    
    // New action to clear booking details after booking is successful
    clearBookingDetails: (state) => {
      state.bookingDetails = null;
    }
  },
});

export default cartSlice.reducer;

export const {
  addtoCart,
  getCartTotal,
  removeCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItems,
  setBookingDetails,  // Export the action for setting booking details
  clearBookingDetails // Export the action for clearing booking details
} = cartSlice.actions;
