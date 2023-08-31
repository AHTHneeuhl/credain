import { Typography } from "components/common";
import { inrToUsd } from "helpers/inrToUsd";
import { BsArrowDownUp } from "react-icons/bs";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { Link } from "react-router-dom";
import { sortTransactions } from "redux/slices";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const TransactionTable: React.FC = () => {
  const dispatch = useAppDispatch();

  const transactions = useAppSelector(
    (state) => state.transaction.transactions
  );

  return (
    <Table className="my-12">
      <TableHead>
        <TableRow>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Transaction Date{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("transactionDate"))}
              />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Invoice No.{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("invoiceNumber"))}
              />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Payer{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("payer"))}
              />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Payee{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("payee"))}
              />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              Amount{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("amount"))}
              />
            </div>
          </TableHeader>
          <TableHeader>
            <div className="flex flex-row items-center gap-2">
              USD Equivalent{" "}
              <BsArrowDownUp
                onClick={() => dispatch(sortTransactions("usdEquivalent"))}
              />
            </div>
          </TableHeader>
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
              <TableCell>$ {inrToUsd(amount).toFixed(2)}</TableCell>
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
