type TProps = {
  amount: number;
  usdEquivalent: number;
};

const AmountEquivalent: React.FC<TProps> = ({ amount, usdEquivalent }) => {
  return (
    <div className="flex flex-row items-center gap-6 p-4">
      <div>
        <h2>Amount</h2>
        <p>{amount}</p>
      </div>
      <div>
        <h2>USD Equivalent</h2>
        <p>{usdEquivalent}</p>
      </div>
    </div>
  );
};

export default AmountEquivalent;
