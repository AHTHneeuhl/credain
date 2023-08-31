import { Input, Modal } from "components/common";
import { useEditAmount } from "hooks";
import { useState } from "react";
import { useParams } from "react-router";
import { updateAmountById } from "redux/slices";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";

const EditAmount: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const transaction = useAppSelector((state) =>
    state.transaction.transactions.find(
      (transaction) => transaction.id === parseInt(id!)
    )
  );

  const initialAmount = transaction?.amount || 0;
  const [amount, setAmount] = useState(initialAmount);
  const { isOpen, onClose } = useEditAmount();

  const body = (
    <div>
      <Input
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Amount"
      body={body}
      actionLabel="Save"
      onSubmit={() => {
        dispatch(updateAmountById({ id: parseInt(id!), amount }));
        onClose();
      }}
    />
  );
};

export default EditAmount;
