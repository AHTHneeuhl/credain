import { Typography } from "components/common";

type TProps = {
  status: string[];
};

const Status: React.FC<TProps> = ({ status }) => {
  return (
    <div className="flex flex-row items-center gap-6">
      {status.map((status) => (
        <Typography>{status}</Typography>
      ))}
    </div>
  );
};

export default Status;
