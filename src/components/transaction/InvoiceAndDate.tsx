type TProps = {
  invoiceNumber: string;
  transactionDate: string;
};

const TransactionDate: React.FC<TProps> = ({
  transactionDate,
  invoiceNumber,
}) => {
  return (
    <div className="flex flex-row items-center gap-6 p-4">
      <div className="rounded-md p-4 bg-neutral-50">
        <h2 className="font-medium">Invoice Number</h2>
        <p className="text-neutral-700">{invoiceNumber}</p>
      </div>
      <div className="rounded-md p-4 bg-neutral-50">
        <h2 className="font-medium">Transaction Date</h2>
        <p className="text-neutral-700">{transactionDate}</p>
      </div>
    </div>
  );
};

export default TransactionDate;
