import { ICard } from "config/types";

interface TProps extends Omit<ICard, "id"> {}

const Card: React.FC<TProps> = ({ title, subtitle, value, currency }) => {
  return (
    <div className="bg-neutral-100 p-4 rounded-xl">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm">{subtitle}</p>
      <h3 className="font-bold">{value}</h3>
      <p className="text-sm">{currency}</p>
    </div>
  );
};

export default Card;
