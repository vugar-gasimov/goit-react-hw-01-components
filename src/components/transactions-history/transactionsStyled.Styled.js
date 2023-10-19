import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: #f2f2f2;
`;

export const StyledThead = styled.thead`
  background-color: #0074d9;
  color: white;
`;

export const StyledTh = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

export const StyledTd = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

export const StyledTbodyEven = styled.tbody`
  tr:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const StyledTbodyOdd = styled.tbody`
  tr:nth-child(odd) {
    background-color: #e6e6e6;
  }
`;
