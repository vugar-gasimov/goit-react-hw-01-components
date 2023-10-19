import styled from 'styled-components';

export const StyledStatistics = styled.section`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

export const StyledStatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e6f7e7;
    transform: scale(1.03);
  }
`;

export const StyledLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const StyledPercentage = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0074d9;
`;
