/* Hooks */
import { useDate } from '../../../../hooks';

export const PostDate = ({ createdAt }: { createdAt: Date }) => {
  const { dayjs } = useDate();

  return (
    <div className="mt-2 text-secondary">{dayjs(createdAt).fromNow()}</div>
  );
};
