import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import style from './App.scss';
import { ICurrency } from '../server/models/Currency/Currency';
import fetchCurrencies from './services/currencyService';
import { convertFromCZK, convertToCZK, formatCurrencyInput } from './utils';
import Title from './components/Title';
import Rates from './components/Rates';
import CurrencyFields from './components/CurrencyFields';

const App = () => {
  const [to, setTo] = useState<ICurrency | null>(null);
  const [fromAmount, setFromAmount] = useState<string>('1');
  const [toAmount, setToAmount] = useState<string>('0');
  const { data: currencies, isLoading } = useQuery<ICurrency[]>({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies,
  });

  useEffect(() => {
    if (currencies) {
      const defaultCurrency = currencies.find((currency) => currency.code.toLowerCase() === 'eur') || null;
      if (!to) setTo(defaultCurrency);
      setToAmount(convertFromCZK(parseFloat(fromAmount), defaultCurrency));
    }
  }, [currencies]);

  const handleToChange = (_: any, newValue: React.SetStateAction<null | ICurrency>) => {
    setTo(newValue);
    if (newValue && typeof newValue !== 'function') {
      setToAmount(convertFromCZK(parseFloat(fromAmount), newValue));
    }
  };

  const handleFromAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const formatted = formatCurrencyInput(event.target.value);
    setFromAmount(formatted);
    setToAmount(convertFromCZK(parseFloat(formatted) || 0, to));
  };

  const handleToAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const formatted = formatCurrencyInput(event.target.value);
    setToAmount(formatted);
    setFromAmount(convertToCZK(parseFloat(formatted) || 0, to));
  };

  return (
    <div className={style.App}>
      {isLoading && <div>Loading...</div>}
      {!currencies || (currencies.length === 0 && <div>No currencies available...</div>)}
      {currencies && currencies.length > 0 && (
        <>
          <Title to={to} />
          <CurrencyFields
            currencies={currencies}
            to={to}
            onToChange={handleToChange}
            fromAmount={fromAmount}
            toAmount={toAmount}
            onFromAmountChange={handleFromAmountChange}
            onToAmountChange={handleToAmountChange}
          />
          <Rates to={to} />
        </>
      )}
    </div>
  );
};

export default App;
