import { Typography } from "components/common";

type TProps = {
  status: string[];
};

const Status: React.FC<TProps> = ({ status }) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <Typography fontWeight="semibold" fontSize="md" className="text-teal-800">
        Status
      </Typography>
      {status.map((status) => (
        <Typography className="text-teal-700 bg-teal-50 px-2 py-1 rounded">
          {status}
        </Typography>
      ))}
    </div>
  );
};

export default Status;
