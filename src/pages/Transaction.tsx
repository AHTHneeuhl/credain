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
      <InvoiceAndDate
        invoiceNumber={transaction?.invoiceNumber!}
        transactionDate={transaction?.transactionDate!}
      />
      <PayerAndPayee payer={transaction?.payer!} payee={transaction?.payee!} />
      <AmountEquivalent
        amount={transaction?.amount!}
        usdEquivalent={transaction?.usdEquivalent!}
      />
      <Status status={transaction?.status!} />
    </>
  );
};

export default Transaction;
