import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import AmountInput from './AmountInput';
import { ICurrency } from '../../server/models/Currency/Currency';

const StyledFieldsWrapper = styled.div`
  display: grid;
  grid-row-gap: 12px;
  margin: 24px 0 12px;
`;

const StyledCurrencyField = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

type Props = {
  currencies: ICurrency[];
  to: ICurrency | null;
  onToChange: (_: any, newValue: React.SetStateAction<null | ICurrency>) => void;
  fromAmount: string;
  toAmount: string;
  onFromAmountChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onToAmountChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const CurrencyFields = ({ currencies, to, onToChange, fromAmount, toAmount, onFromAmountChange, onToAmountChange }: Props) => (
  <StyledFieldsWrapper>
    <StyledCurrencyField>
      <AmountInput value={fromAmount} onChange={onFromAmountChange} />
      <Autocomplete
        readOnly
        freeSolo
        disabled
        options={[]}
        defaultValue="Czech Republic | CZK | Czech koruna"
        renderInput={(params) => <TextField {...params} />}
      />
    </StyledCurrencyField>
    <StyledCurrencyField>
      <AmountInput value={toAmount} onChange={onToAmountChange} />
      <Autocomplete
        disableClearable
        options={currencies}
        value={to ?? undefined}
        getOptionLabel={(option) => {
          if (!option) return '';
          return `${option.country ? `${option.country} | ` : ''}${option.code}${option.currency ? ` | ${option.currency}` : ''}`;
        }}
        onChange={onToChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </StyledCurrencyField>
  </StyledFieldsWrapper>
);

export default CurrencyFields;
