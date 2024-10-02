import './Followers.scss';

interface IProps {
  totalPubs: number;
}

export const Followers = ({ totalPubs }: IProps) => {
  return (
    <>
      <section className="followers">
        <p>
          <span>{totalPubs ?? '--'}</span> posts
        </p>
        <p>
          <span>2</span> followers
        </p>
        <p>
          <span>0</span> following
        </p>
      </section>
    </>
  );
};
