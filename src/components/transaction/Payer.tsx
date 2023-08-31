type TProps = {
  payer: string;
};

const Payer: React.FC<TProps> = ({ payer }) => {
  return (
    <div className="p-4">
      <h2 className="font-medium">Payer</h2>
      <p className="text-neutral-700">{payer}</p>
    </div>
  );
};

export default Payer;
