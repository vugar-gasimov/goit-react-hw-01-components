import React from 'react';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
} from './statisticsStyled.Styled';
import Stats from './Stats';
export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      <StyledTitle>{title}</StyledTitle>

      <StyledStatList>
        {stats.map(statsItem => (
          <Stats key={statsItem.id} {...statsItem} />
        ))}
      </StyledStatList>
    </StyledStatistics>
  );
};
