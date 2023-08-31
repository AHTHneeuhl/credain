import { cn } from "helpers/utils";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const Table: React.FC<TProps> = ({ children }) => {
  return <table className="w-full shadow-sm rounded-xl">{children}</table>;
};

export const TableHead: React.FC<TProps> = ({ children }) => {
  return <thead className="bg-neutral-50 shadow-sm">{children}</thead>;
};

export const TableBody: React.FC<TProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow: React.FC<TProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHeader: React.FC<TProps> = ({ children }) => {
  return <th className="py-2 font-semibold">{children}</th>;
};

export const TableCell: React.FC<TProps> = ({ children, className }) => {
  return (
    <td
      className={cn(
        "text-center py-2 text-sm font-light text-neutral-500",
        className
      )}
    >
      {children}
    </td>
  );
};
