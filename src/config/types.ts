export interface ICard {
  id: string | number;
  title: string;
  subtitle: string;
  value: string | number;
  currency: "USD" | "INR";
}

export interface ITransaction {
  id: string | number;
  transactionDate: string;
  invoiceNumber: string;
  payer: string;
  payee: string;
  amount: number;
  usdEquivalent: number;
  status: string[];
}
