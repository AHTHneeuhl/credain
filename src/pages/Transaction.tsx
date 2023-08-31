import { Typography } from "components/common";
import {
  PayerAndPayee,
  InvoiceAndDate,
  Status,
  AmountEquivalent,
} from "components/transaction";
import { transactions } from "config";
import { useParams } from "react-router-dom";

const Transaction: React.FC = () => {
  const { id } = useParams();

  const transaction = transactions.find(
    (transaction) => transaction.id === parseInt(id!)
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
        <PayerAndPayee
          payer={transaction?.payer!}
          payee={transaction?.payee!}
        />
        <AmountEquivalent
          amount={transaction?.amount!}
          usdEquivalent={transaction?.usdEquivalent!}
        />
        <Status status={transaction?.status!} />
      </div>
    </>
  );
};

export default Transaction;
