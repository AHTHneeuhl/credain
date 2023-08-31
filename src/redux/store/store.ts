import { configureStore } from "@reduxjs/toolkit";
import transaction from "../slices/transaction";
import cards from "../slices/cards";

export const store = configureStore({
  reducer: {
    transaction,
    cards,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
