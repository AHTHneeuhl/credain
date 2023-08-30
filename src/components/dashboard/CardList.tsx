import { cards } from "config";
import Card from "./Card";

const CardList: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      {cards.map(({ id, title, subtitle, value, currency }) => {
        return (
          <Card
            key={id}
            title={title}
            subtitle={subtitle}
            value={value}
            currency={currency}
          />
        );
      })}
    </div>
  );
};

export default CardList;
