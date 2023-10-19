import React from 'react';
import {
  StyledItem,
  StyledLabel,
  StyledPercentage,
  getRandomColor,
} from './statisticsStyled.Styled';
const Stats = ({ label, percentage }) => {
  const bgColor = getRandomColor();
  return (
    <StyledItem bgColor={bgColor}>
      <StyledLabel>{label}</StyledLabel>
      <StyledPercentage>{percentage}%</StyledPercentage>
    </StyledItem>
  );
};
export default Stats;
