import React from 'react';
import {
  StyledItem,
  StyledLabel,
  StyledPercentage,
} from './statisticsStyled.Styled';
const Stats = ({ label, percentage }) => {
  return (
    <StyledItem>
      <StyledLabel>{label}</StyledLabel>
      <StyledPercentage>{percentage}%</StyledPercentage>
    </StyledItem>
  );
};
export default Stats;
