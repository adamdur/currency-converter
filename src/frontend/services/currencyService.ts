import { ICurrency } from '../../server/models/Currency/Currency';

const BASE_URL = process.env.REACT_APP_API_URL || '';
const fetchCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/currencies`);
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
