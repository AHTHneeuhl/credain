import { Typography } from "components/common";

type TProps = {
  invoiceNumber: string;
  transactionDate: string;
};

const TransactionDate: React.FC<TProps> = ({
  transactionDate,
  invoiceNumber,
}) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-teal-800"
        >
          Invoice Number
        </Typography>
        <Typography fontWeight="semibold" className="text-teal-700">
          {invoiceNumber}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-teal-800"
        >
          Transaction Date
        </Typography>
        <Typography fontWeight="semibold" className="text-teal-700">
          {transactionDate}
        </Typography>
      </div>
    </div>
  );
};

export default TransactionDate;
