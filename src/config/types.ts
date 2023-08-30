export interface ICard {
  id: string | number;
  title: string;
  subtitle: string;
  value: string | number;
  currency: "USD" | "INR";
}
