import { cn } from "helpers/utils";
import { IconType } from "react-icons";

type TProps = {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<TProps> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        `relative disabled:opacity-70 disabled:cursor-not-allowed px-2 font-semibold rounded hover:opacity-80 transition w-full ${
          outline
            ? "bg-white border-black text-black"
            : "bg-rose-500 border-rose-500 text-white"
        } ${
          small
            ? "py-1 px-2 text-sm border font-light"
            : "py-3 px-4 text-md border-2 font-semibold"
        }`,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon ? <Icon size={24} className="absolute left-4 top-3" /> : null}
      {label}
    </button>
  );
};

export default Button;
