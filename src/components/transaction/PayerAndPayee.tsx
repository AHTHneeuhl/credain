import { Typography } from "components/common";

type TProps = {
  payer: string;
  payee: string;
};

const PayerAndPayee: React.FC<TProps> = ({ payer, payee }) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-green-800"
        >
          Payer
        </Typography>
        <Typography fontWeight="semibold" className="text-green-700">
          {payer}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-green-800"
        >
          Payee
        </Typography>
        <Typography fontWeight="semibold" className="text-green-700">
          {payee}
        </Typography>
      </div>
    </div>
  );
};

export default PayerAndPayee;
