import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { BsArrowDownUp } from "react-icons/bs";
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
  const handleSortStrings = () => {};
  const handleSortNumbers = () => {};

  return (
    <Table className="my-12">
      <TableHead>
        <TableRow>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Transaction Date <BsArrowDownUp onClick={handleSortNumbers} />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Invoice No. <BsArrowDownUp onClick={handleSortStrings} />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Payer <BsArrowDownUp />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Payee <BsArrowDownUp />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Amount <BsArrowDownUp />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              USD Equivalent <BsArrowDownUp />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Status <BsArrowDownUp />
            </div>
          </TableHeader>
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
              <TableCell className="text-neutral-800 justify-start flex gap-1 py-3">
                {status.map((status, index) => (
                  <Typography key={index} className="bg-blue-100 rounded px-1">
                    {status}
                  </Typography>
                ))}
              </TableCell>
              <TableCell className="py-1">
                <PiDotsThreeCircleVertical
                  size={24}
                  className="cursor-pointer text-center m-auto"
                />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
