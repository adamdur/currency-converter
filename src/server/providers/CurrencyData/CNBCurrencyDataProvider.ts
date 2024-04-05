import fetch from 'node-fetch';
import { ICurrency } from '../../models/Currency/Currency';
import AbstractCurrencyDataProvider from './AbstractCurrencyDataProvider';

export default class CNBCurrencyDataProvider extends AbstractCurrencyDataProvider {
  // getData = async (): Promise<ICurrency[]> => {
  getData = async (): Promise<ICurrency[]> => {
    const raw = await fetch(this.url).then((res) => res.text());
    const rawData = raw.split('\n');
    if (rawData.length < 3) throw new Error('Invalid currency data format.');

    const columns = rawData[1].split('|').map((column) => column.toLowerCase());
    return rawData.slice(2, rawData.length).reduce((previousValue: ICurrency[], currentValue) => {
      const values = currentValue.split('|');
      if (values.length >= columns.length) {
        const row = {};
        columns.forEach((column, index) => {
          row[column] = values[index];
        });
        previousValue.push(row as ICurrency);
      }
      return previousValue;
    }, []);
  };
}
