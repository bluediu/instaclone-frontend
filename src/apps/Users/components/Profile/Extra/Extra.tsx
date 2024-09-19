/* Components */
import { Icon } from 'semantic-ui-react';

/* Interfaces */
import { IUser } from '../../../interfaces';

export const Extra = ({ data }: { data: IUser }) => {
  const truncatedWebsite =
    data.website.length > 20 ? data.website.slice(0, 40) + '...' : data.website;

  return (
    <section className="other">
      <p className="name">
        {data.first_name} {data.last_name}
      </p>

      {data.description && <p className="description">{data.description}</p>}

      {data!.website && (
        <a
          href={data!.website}
          className="website"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkify" />
          {truncatedWebsite}
        </a>
      )}
    </section>
  );
};
