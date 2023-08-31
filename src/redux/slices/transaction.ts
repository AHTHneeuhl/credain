import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "config/types";

const initialState = {
  transactions: [] as ITransaction[],
};

export const transaction = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      return {
        ...state,
        transactions: action.payload,
      };
    },
    sortTransactions: (state, action: PayloadAction<keyof ITransaction>) => {
      const sortedTransactions = state.transactions.slice().sort((a, b) => {
        const key = action.payload;

        if (typeof a[key] === "string" && typeof b[key] === "string") {
          return (a[key] as string).localeCompare(b[key] as string);
        } else if (typeof a[key] === "number" && typeof b[key] === "number") {
          return (a[key] as number) - (b[key] as number);
        } else {
          return 0;
        }
      });

      return {
        ...state,
        transactions: sortedTransactions,
      };
    },
  },
});

export const { setTransactions, sortTransactions } = transaction.actions;

export default transaction.reducer;
