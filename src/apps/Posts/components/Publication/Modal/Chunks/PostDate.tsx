/* Hooks */
import { useDate } from '../../../../hooks';

export const PostDate = ({ createdAt }: { createdAt: Date }) => {
  const { dayjs } = useDate();

  return (
    <div
      className="mt-2 text-secondary"
      title={dayjs(createdAt).format('MM/DD/YYYY, hh:mm A')}
    >
      {dayjs(createdAt).fromNow()}
    </div>
  );
};
