import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action) => {
      return {
        ...state,
        cards: action.payload,
      };
    },
  },
});

export const { setCards } = cards.actions;

export default cards.reducer;
