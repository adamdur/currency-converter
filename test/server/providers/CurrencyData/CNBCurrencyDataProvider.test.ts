import fetch from 'node-fetch';
import CNBCurrencyDataProvider from '../../../../src/server/providers/CurrencyData/CNBCurrencyDataProvider';

const { Response } = jest.requireActual('node-fetch');
jest.mock('node-fetch', () => jest.fn());

describe('CNBCurrencyDataProvider', () => {
  beforeEach(() => {
    (fetch as unknown as jest.Mock).mockClear();
  });

  it('fetches and processes currency data', async () => {
    const mockFetchResponse = Promise.resolve(new Response('04 Apr 2024 #66\nCountry|Currency|Amount|Code|Rate\nEMU|euro|1|EUR|25.310'));
    (fetch as unknown as jest.Mock).mockImplementation(() => mockFetchResponse);

    const provider = new CNBCurrencyDataProvider('http://example.com');
    const data = await provider.getData();

    expect(fetch).toHaveBeenCalledWith('http://example.com');
    expect(data).toEqual([{
      country: 'EMU', currency: 'euro', amount: '1', code: 'EUR', rate: '25.310',
    }]);
  });

  it('fetches and processes currency data with empty response', async () => {
    const mockFetchResponse = Promise.resolve(new Response('Hello world'));
    (fetch as unknown as jest.Mock).mockImplementation(() => mockFetchResponse);

    const provider = new CNBCurrencyDataProvider('http://example.com');
    await expect(provider.getData()).rejects.toThrow('Invalid currency data format.');
    // expect(() => provider.getData()).toThrow('Invalid currency data format.');
  });
});
