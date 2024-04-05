import { ICurrency } from '../../models/Currency/Currency';

export default abstract class AbstractCurrencyDataProvider {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  abstract getData(): Promise<ICurrency[]>;
}
