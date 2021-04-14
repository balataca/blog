import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th:last-child {
    border: 0;
  }

  tr:nth-child(even) td {
    background: #f8f6ff;
  }
`;

export const TableCell = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
`;

export const TableHeadCell = styled.th`
  background: #8561c5;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
`;
