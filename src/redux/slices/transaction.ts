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
    updatePayerById: (
      state,
      action: PayloadAction<{ id: number; payer: string }>
    ) => {
      const { id, payer } = action.payload;
      const updatedTransactions = state.transactions.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            payer,
          };
        }

        return transaction;
      });

      return {
        ...state,
        transactions: updatedTransactions,
      };
    },
    updatePayeeById: (
      state,
      action: PayloadAction<{ id: number; payee: string }>
    ) => {
      const { id, payee } = action.payload;
      const updatedTransactions = state.transactions.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            payee,
          };
        }

        return transaction;
      });

      return {
        ...state,
        transactions: updatedTransactions,
      };
    },
    updateAmountById: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const updatedTransactions = state.transactions.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            amount,
          };
        }

        return transaction;
      });

      return {
        ...state,
        transactions: updatedTransactions,
      };
    },
  },
});

export const {
  setTransactions,
  sortTransactions,
  updatePayerById,
  updateAmountById,
  updatePayeeById,
} = transaction.actions;

export default transaction.reducer;
