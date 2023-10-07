import styled from "styled-components";

export const Table = styled.table`
  width: 1000px;
  margin: 0 auto;
  background: white;
  margin-bottom: 100px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const TableTitle = styled.thead`
  height: 70px;
  text-align: center;
  color: black;
  background: rgb(226, 226, 226);
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;

  th {
    width: calc(100% / 3);
  }
`;

export const TableData = styled.td`
  border: 1px solid rgba(10, 10, 10, 0.1);
`;