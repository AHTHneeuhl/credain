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

const TransactionTable: React.FC = () => {
  return (
    <Table>
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
              <Link to={`/transaction/${id}`}>
                <TableCell className="text-blue-700 underline cursor-pointer">
                  {invoiceNumber}
                </TableCell>
              </Link>
              <TableCell>{payer}</TableCell>
              <TableCell>{payee}</TableCell>
              <TableCell>₹ {amount.toFixed(2)}</TableCell>
              <TableCell>$ {usdEquivalent.toFixed(2)}</TableCell>
              <TableCell className="text-neutral-800">{status}</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
