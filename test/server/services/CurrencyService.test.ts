import AbstractCurrencyDataProvider from '../../../src/server/providers/CurrencyData/AbstractCurrencyDataProvider';
import { CurrencyService } from '../../../src/server/services/CurrencyService';

jest.mock('../../../src/server/providers/CurrencyData/AbstractCurrencyDataProvider');

describe('CurrencyService', () => {
  it('should set provider and get currency data', async () => {
    const mockProvider = {
      getData: jest.fn().mockResolvedValue([{ code: 'EUR', rate: '25.310', amount: 1 }]),
    } as unknown as AbstractCurrencyDataProvider;

    const service = new CurrencyService();
    service.setProvider(mockProvider);
    const data = await service.getCurrencyData();

    expect(mockProvider.getData).toHaveBeenCalled();
    expect(data).toEqual([{ code: 'EUR', rate: '25.310', amount: 1 }]);
  });
});
