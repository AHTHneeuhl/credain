import { Button, Typography } from "components/common";
import { useEditAmount } from "hooks";
import EditAmount from "./EditAmount";

type TProps = {
  amount: number;
  usdEquivalent: number;
};

const AmountEquivalent: React.FC<TProps> = ({ amount, usdEquivalent }) => {
  const { onOpen } = useEditAmount();

  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center bg-green-100 p-4 rounded">
        <Typography
          fontSize="md"
          fontWeight="semibold"
          className="text-teal-800"
        >
          Total Paid Amount
        </Typography>
        <Typography
          fontSize="sm"
          fontWeight="semibold"
          className="text-teal-800"
        >
          ₹ {amount}
        </Typography>
        <Button label="Edit Amount" small onClick={onOpen} />
        <EditAmount />
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
