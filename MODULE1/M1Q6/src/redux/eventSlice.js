import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: { events: [] },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    bookEvent: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload);
      if (event && event.availableSeats > 0) {
        event.availableSeats -= 1;
      }
    },
  },
});

export const { setEvents, bookEvent } = eventSlice.actions;
export default eventSlice.reducer;
