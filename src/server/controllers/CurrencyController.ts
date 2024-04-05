import { Request, Response } from 'express';
import { ICurrencyService } from '../services/CurrencyService';
import logger from '../logger';
import AbstractCurrencyDataProvider from '../providers/CurrencyData/AbstractCurrencyDataProvider';

export default class CurrencyController {
  private readonly service: ICurrencyService;

  constructor(service: ICurrencyService, provider?: AbstractCurrencyDataProvider) {
    this.service = service;
    if (provider) this.service.setProvider(provider);
  }

  getCurrencies = async (req: Request, res: Response) => {
    try {
      const data = await this.service.getCurrencyData();
      res.json(data);
    } catch (e: any) {
      logger.error(e);
      res.status(500).send(e.message);
    }
  };
}
