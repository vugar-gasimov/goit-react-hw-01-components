import React from 'react';
import { Transactions } from './Transactions';
import {
  StyledTable,
  StyledThead,
  StyledTh,
  StyledDiv,
} from './transactionsStyled.Styled';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledDiv>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Type</StyledTh>
            <StyledTh>Amount</StyledTh>
            <StyledTh>Currency</StyledTh>
          </tr>
        </StyledThead>

        {items.map((transaction, i) => {
          return (
            <Transactions key={transaction.id} bgIndex={i} {...transaction} />
          );
        })}
      </StyledTable>
    </StyledDiv>
  );
};
