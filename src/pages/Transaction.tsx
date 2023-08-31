import { Button, Typography } from "components/common";
import {
  AmountPayeePayer,
  InvoiceAndDate,
  Status,
} from "components/transaction";
import { useParams } from "react-router-dom";
import { useAppSelector } from "redux/store/hooks";

const Transaction: React.FC = () => {
  const { id } = useParams();

  const transaction = useAppSelector((state) =>
    state.transaction.transactions.find(
      (transaction) => transaction.id === parseInt(id!)
    )
  );

  return (
    <>
      <Typography
        fontWeight="semibold"
        className="text-center text-3xl text-neutral-800 mb-6"
      >
        Transaction Details ({transaction?.id!})
      </Typography>
      <div className="h-[64vh] bg-teal-300/75 rounded-md flex flex-col justify-between gap-4 p-6">
        <InvoiceAndDate
          invoiceNumber={transaction?.invoiceNumber!}
          transactionDate={transaction?.transactionDate!}
        />
        <AmountPayeePayer
          payer={transaction?.payer!}
          payee={transaction?.payee!}
          amount={transaction?.amount!}
        />
        <Status status={transaction?.status!} />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button
          className="w-fit"
          small
          label="Back to Dashboard"
          onClick={() => window.history.back()}
        />
      </div>
    </>
  );
};

export default Transaction;
