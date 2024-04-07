import React from 'react';
import styled from 'styled-components';
import { convertFromCZK, convertToCZK } from '../utils';
import { ICurrency } from '../../server/models/Currency/Currency';

const StyledRates = styled.div`
  display: grid;
  grid-row-gap: 4px;
  margin-top: 12px;
  font-size: 0.8rem;
  color: #696969;
`;

const StyledRate = styled.p`
  margin: 0;
`;

type Props = {
  to: ICurrency | null;
};

const Rates = ({ to }: Props) => (
  <StyledRates>
    <StyledRate>
      {to ? (
        <>
          1 CZK = <strong>{`${convertFromCZK(1, to)} ${to.code}`}</strong>
        </>
      ) : (
        <strong>NO CURRENCY TO CONVERT</strong>
      )}
    </StyledRate>
    {to && (
      <StyledRate>
        1 {to.code} = <strong>{convertToCZK(1, to)} CZK</strong>
      </StyledRate>
    )}
  </StyledRates>
);

export default Rates;
