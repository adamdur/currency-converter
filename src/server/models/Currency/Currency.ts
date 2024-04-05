export interface ICurrency {
  code: string;
  rate: number;
  amount: number;
  currency?: string;
  country?: string;
}
