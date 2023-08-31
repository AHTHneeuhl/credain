import { Typography } from "components/common";

type TProps = {
  amount: number;
  usdEquivalent: number;
};

const AmountEquivalent: React.FC<TProps> = ({ amount, usdEquivalent }) => {
  return (
    <div className="flex flex-row items-center gap-6 p-4">
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-teal-800"
        >
          Amount
        </Typography>
        <Typography
          fontSize="sm"
          fontWeight="semibold"
          className="text-teal-800"
        >
          ₹ {amount}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-teal-800"
        >
          USD Equivalent
        </Typography>
        <Typography
          fontSize="sm"
          fontWeight="semibold"
          className="text-teal-800"
        >
          $ {usdEquivalent}
        </Typography>
      </div>
    </div>
  );
};

export default AmountEquivalent;
