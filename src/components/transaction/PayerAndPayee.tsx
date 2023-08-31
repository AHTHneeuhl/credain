type TProps = {
  payer: string;
  payee: string;
};

const PayerAndPayee: React.FC<TProps> = ({ payer, payee }) => {
  return (
    <div className="flex flex-row items-center gap-6 p-4">
      <div>
        <h2 className="font-medium">Payer</h2>
        <p className="text-neutral-700">{payer}</p>
      </div>
      <div>
        <h2 className="font-medium">Payee</h2>
        <p className="text-neutral-700">{payee}</p>
      </div>
    </div>
  );
};

export default PayerAndPayee;
