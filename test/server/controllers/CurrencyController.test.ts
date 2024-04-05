import { Request, Response } from 'express';
import CurrencyController from '../../../src/server/controllers/CurrencyController';
import { CurrencyService } from '../../../src/server/services/CurrencyService';

jest.mock('../../../src/server/services/CurrencyService', () => ({
  CurrencyService: jest.fn().mockImplementation(() => ({
    getCurrencyData: jest.fn().mockResolvedValue([{ code: 'EUR', rate: '25.310', amount: 1 }]),
  })),
}));

describe('CurrencyController', () => {
  it('should get currencies and return a response', async () => {
    const mockService = new CurrencyService() as jest.Mocked<CurrencyService>;
    const req = {} as Request;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    const controller = new CurrencyController(mockService);
    await controller.getCurrencies(req, res);

    expect(mockService.getCurrencyData).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith([{ code: 'EUR', rate: '25.310', amount: 1 }]);
  });
});
