import { transactions } from "config";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { Link } from "react-router-dom";
import { Typography } from "components/common";

const TransactionTable: React.FC = () => {
  return (
    <Table className="my-12">
      <TableHead>
        <TableRow>
          <TableHeader>Transaction Date</TableHeader>
          <TableHeader>Invoice No.</TableHeader>
          <TableHeader>Payer</TableHeader>
          <TableHeader>Payee</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>USD Equivalent</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(
          ({
            id,
            transactionDate,
            invoiceNumber,
            payer,
            payee,
            amount,
            usdEquivalent,
            status,
          }) => (
            <TableRow key={id}>
              <TableCell>{transactionDate}</TableCell>
              <TableCell className="text-blue-700 underline">
                <Link to={`/transaction/${id}`}>{invoiceNumber}</Link>
              </TableCell>
              <TableCell>{payer}</TableCell>
              <TableCell>{payee}</TableCell>
              <TableCell>₹ {amount.toFixed(2)}</TableCell>
              <TableCell>$ {usdEquivalent.toFixed(2)}</TableCell>
              <TableCell className="text-neutral-800 justify-start flex gap-1">
                {status.map((status, index) => (
                  <Typography key={index} className="bg-blue-100 rounded px-1">
                    {status}
                  </Typography>
                ))}
              </TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
