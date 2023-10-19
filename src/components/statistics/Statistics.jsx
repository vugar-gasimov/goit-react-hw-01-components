import React from 'react';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  getRandomColor,
} from './statisticsStyled.Styled';
import Stats from './Stats';
export const Statistics = ({ title, stats }) => {
  const bgColor = getRandomColor();
  return (
    <StyledStatistics bgColor={bgColor}>
      {title && <StyledTitle>{title}</StyledTitle>}

      <StyledStatList>
        {stats.map(statsItem => (
          <Stats key={statsItem.id} {...statsItem} />
        ))}
      </StyledStatList>
    </StyledStatistics>
  );
};
