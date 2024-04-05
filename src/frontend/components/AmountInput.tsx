import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const AmountInput = ({ value, onChange }: Props) => <TextField type="number" value={value} onChange={(e) => onChange(e)} />;

export default AmountInput;
