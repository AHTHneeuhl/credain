import { Input, Modal } from "components/common";
import { useEditPayer } from "hooks";
import { useState } from "react";
import { useParams } from "react-router";
import { updatePayerById } from "redux/slices";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";

const EditPayer: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const transaction = useAppSelector((state) =>
    state.transaction.transactions.find(
      (transaction) => transaction.id === parseInt(id!)
    )
  );

  const initialPayer = transaction?.payer || "";
  const [payer, setPayer] = useState(initialPayer);
  const { isOpen, onClose } = useEditPayer();

  const body = (
    <div>
      <Input value={payer} onChange={(e) => setPayer(e.target.value)} />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Payer"
      body={body}
      actionLabel="Save"
      onSubmit={() => {
        dispatch(updatePayerById({ id: parseInt(id!), payer }));
        onClose();
      }}
    />
  );
};

export default EditPayer;
