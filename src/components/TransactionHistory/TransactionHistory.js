import { Table,TableTitle,TableData,TableRow} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableTitle>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableTitle>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id} $idx={index}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
        
