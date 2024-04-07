import { ICurrency } from '../../server/models/Currency/Currency';

export const convertFromCZK = (amount: number, currency: ICurrency | undefined) => {
  if (!currency) return '0';
  return ((amount / currency.rate) * currency.amount).toFixed(3);
};

export const convertToCZK = (amount: number, currency: ICurrency | undefined) => {
  if (!currency) return '0';
  return ((amount * currency.rate) / currency.amount).toFixed(3);
};

export const formatCurrencyInput = (input: string) => input.replace(/[^\d.]/g, '').replace(/(\..*?)\..*/g, '$1');
