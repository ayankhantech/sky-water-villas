// src/redux/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookingDetails: null, // You can store booking details here
    bookingStatus: 'idle', // Can track the booking status (idle, loading, success, error)
  },
  reducers: {
    // Set booking details when a user selects a booking
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    // Clear booking details when a booking is confirmed or canceled
    clearBookingDetails: (state) => {
      state.bookingDetails = null;
    },
    // Set the status of the booking (e.g., 'loading', 'success', 'error')
    setBookingStatus: (state, action) => {
      state.bookingStatus = action.payload;
    },
  },
});

export default bookingSlice.reducer;

// Export actions
export const {
  setBookingDetails,
  clearBookingDetails,
  setBookingStatus,
} = bookingSlice.actions;
