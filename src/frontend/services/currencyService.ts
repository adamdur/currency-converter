import { ICurrency } from '../../server/models/Currency/Currency';

const fetchCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const response = await fetch('/api/currencies');
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchCurrencies;
