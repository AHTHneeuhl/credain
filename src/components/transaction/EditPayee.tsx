import { Input, Modal } from "components/common";
import { useEditPayee } from "hooks";
import { useState } from "react";
import { useParams } from "react-router";
import { updatePayeeById } from "redux/slices";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";

const EditPayee: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const transaction = useAppSelector((state) =>
    state.transaction.transactions.find(
      (transaction) => transaction.id === parseInt(id!)
    )
  );

  const initialPayee = transaction?.payee || "";
  const [payee, setPayee] = useState(initialPayee);
  const { isOpen, onClose } = useEditPayee();

  const body = (
    <div>
      <Input value={payee} onChange={(e) => setPayee(e.target.value)} />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Payee"
      body={body}
      actionLabel="Save"
      onSubmit={() => {
        dispatch(updatePayeeById({ id: parseInt(id!), payee }));
        onClose();
      }}
    />
  );
};

export default EditPayee;
