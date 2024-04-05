import AbstractCurrencyDataProvider from '../providers/CurrencyData/AbstractCurrencyDataProvider';
import { ICurrency } from '../models/Currency/Currency';

export interface ICurrencyService {
  setProvider: (provider: AbstractCurrencyDataProvider) => void;
  getCurrencyData: () => Promise<ICurrency[]>;
}

export class CurrencyService implements ICurrencyService {
  private provider?: AbstractCurrencyDataProvider;

  constructor(provider?: AbstractCurrencyDataProvider) {
    if (provider) this.provider = provider;
  }

  setProvider = (provider: AbstractCurrencyDataProvider): void => {
    this.provider = provider;
  };

  getCurrencyData = async (): Promise<ICurrency[]> => {
    if (!this.provider) throw new Error('CurrencyDataProvider not set.');

    return this.provider.getData();
  };
}
