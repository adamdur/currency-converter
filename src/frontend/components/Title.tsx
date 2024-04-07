import React from 'react';
import styled from 'styled-components';
import { ICurrency } from '../../server/models/Currency/Currency';

const StyledTitle = styled.h2`
  margin: 0;
  margin-bottom: 8px;
`;

type Props = {
  to: ICurrency | undefined;
};

const Title = ({ to }: Props) =>
  to ? (
    <StyledTitle>
      Convert CZK to
      {` ${to.code}`}
    </StyledTitle>
  ) : null;

export default Title;
