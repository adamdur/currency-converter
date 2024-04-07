import React from 'react';
import styled from 'styled-components';
import { ICurrency } from '../../server/models/Currency/Currency';

const StyledTitle = styled.h2`
  margin: 0;
  margin-bottom: 8px;
`;

type Props = {
  to: ICurrency | null;
};

const Title = ({ to }: Props) =>
  (
    <StyledTitle>
      {to ? `Convert CZK to ${to.code}` : 'Currency converter'}
    </StyledTitle>
  )

export default Title;
