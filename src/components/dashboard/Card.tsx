import { Typography } from "components/common";
import { ICard } from "config/types";

interface TProps extends Omit<ICard, "id"> {}

const Card: React.FC<TProps> = ({ title, subtitle, value, currency }) => {
  return (
    <div className="flex flex-col flex-1 cursor-pointer bg-teal-100 px-6 py-4 rounded-xl">
      <Typography fontSize="md" fontWeight="semibold" className="text-teal-800">
        {title}
      </Typography>
      <Typography fontSize="sm" fontWeight="medium">
        {subtitle}
      </Typography>
      <div className="flex flex-row items-center gap-1">
        <Typography
          fontSize="xl"
          fontWeight="semibold"
          className="text-teal-800"
        >
          {value}
        </Typography>
        <Typography fontSize="sm" fontWeight="medium" className="text-teal-700">
          {currency}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
