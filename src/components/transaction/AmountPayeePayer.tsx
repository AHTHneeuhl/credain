import { Button, Typography } from "components/common";
import { inrToUsd } from "helpers/inrToUsd";
import { useEditAmount, useEditPayee, useEditPayer } from "hooks";
import EditPayee from "./EditPayee";
import EditPayer from "./EditPayer";
import EditAmount from "./EditAmount";

type TProps = {
  payer: string;
  payee: string;
  amount: number;
};

const AmountPayeePayer: React.FC<TProps> = ({ payer, payee, amount }) => {
  const { onOpen: onOpenPayer } = useEditPayer();
  const { onOpen: onOpenPayee } = useEditPayee();
  const { onOpen: onOpenAmount } = useEditAmount();

  return (
    <div className="flex flex-col text-center justify-center gap-1">
      <Typography fontSize="xl" fontWeight="semibold" className="text-teal-700">
        Total transaction amount{" "}
        <span className="text-teal-800">₹{amount.toFixed(2)}</span>, which
        equivalent{" "}
        <span className="text-teal-800">${inrToUsd(amount).toFixed(2)}</span>{" "}
        was paid
      </Typography>
      <Typography fontSize="xl" fontWeight="semibold" className="text-teal-700">
        by <span className="text-teal-800">{payer}</span> to{" "}
        <span className="text-teal-800">{payee}</span>.
      </Typography>

      <div className="flex flex-row items-center justify-center gap-4 mt-6">
        <Button
          label="Edit Payer"
          className="w-fit"
          small
          onClick={onOpenPayer}
        />
        <EditPayer />

        <Button
          label="Edit Payee"
          className="w-fit"
          small
          onClick={onOpenPayee}
        />
        <EditPayee />

        <Button
          label="Edit Amount"
          className="w-fit"
          small
          onClick={onOpenAmount}
        />
        <EditAmount />
      </div>
    </div>
  );
};

export default AmountPayeePayer;
