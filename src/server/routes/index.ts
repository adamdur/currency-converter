import { Router } from 'express';
import dotenv from 'dotenv';
import CurrencyController from '../controllers/CurrencyController';
import { CurrencyService } from '../services/CurrencyService';
import CNBCurrencyDataProvider from '../providers/CurrencyData/CNBCurrencyDataProvider';

dotenv.config();
const PROVIDER_URL = process.env.CURRENCY_PROVIDER_URL as string;
const router = Router();
const currencyController = new CurrencyController(new CurrencyService(), new CNBCurrencyDataProvider(PROVIDER_URL));

router.get('/api/currencies', currencyController.getCurrencies);

export default router;
