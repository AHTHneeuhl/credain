import { Payer, TransactionDate } from "components/transaction";
import { transactions } from "config";
import { useParams } from "react-router-dom";

const Transaction: React.FC = () => {
  const { id } = useParams();

  const transaction = transactions.find(
    (transaction) => transaction.id === parseInt(id!)
  );

  return (
    <>
      <TransactionDate transactionDate={transaction?.transactionDate!} />
      <div>Transaction Invoice - {transaction?.invoiceNumber}</div>
      <Payer payer={transaction?.payer!} />
      <div>Payee - {transaction?.payee}</div>
      <div>Amount - {transaction?.amount.toFixed(2)}</div>
    </>
  );
};

export default Transaction;
