import React from 'react';
import {
  StyledTbodyEven,
  StyledTbodyOdd,
  StyledTh,
} from './transactionsStyled.Styled';

export const Transactions = ({ type, amount, currency, bgIndex }) => {
  return (
    <>
      {bgIndex % 2 === 0 ? (
        <StyledTbodyEven>
          <tr>
            <StyledTh>{type}</StyledTh>
            <StyledTh>{amount}</StyledTh>
            <StyledTh>{currency}</StyledTh>
          </tr>
        </StyledTbodyEven>
      ) : (
        <StyledTbodyOdd>
          <tr>
            <StyledTh>{type}</StyledTh>
            <StyledTh>{amount}</StyledTh>
            <StyledTh>{currency}</StyledTh>
          </tr>
        </StyledTbodyOdd>
      )}
    </>
  );
};
