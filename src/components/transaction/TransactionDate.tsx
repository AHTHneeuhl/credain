type TProps = {
  transactionDate: string;
};

const TransactionDate: React.FC<TProps> = ({ transactionDate }) => {
  return (
    <div className="rounded-md p-4 bg-neutral-50">
      <h2 className="font-medium">Transaction Date</h2>
      <p className="text-neutral-700">{transactionDate}</p>
    </div>
  );
};

export default TransactionDate;
