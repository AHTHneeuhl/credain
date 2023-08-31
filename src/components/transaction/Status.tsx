import { Typography } from "components/common";

type TProps = {
  status: string[];
};

const Status: React.FC<TProps> = ({ status }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <Typography fontWeight="semibold" fontSize="md" className="text-teal-800">
        Transaction Status
      </Typography>
      {status &&
        status.map((status, index) => (
          <Typography
            key={index}
            className="text-teal-700 bg-teal-50 px-2 py-1 rounded"
          >
            {status}
          </Typography>
        ))}
    </div>
  );
};

export default Status;
