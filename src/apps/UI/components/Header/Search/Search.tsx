import { useEffect, useState } from 'react';

/* Components */
import {
  Search as SearchSemantic,
  Image,
  SearchProps,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

/* Hooks */
import { useSearchUsers } from '../../../../Users/hooks';

/* Utils */
import { generateUrl } from '../../../../../utils';

/* Constants */
import { usersPath } from '../../../../Users/constants';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import './Search.scss';

interface ISearchResult {
  key: number;
  title: string;
  username: string;
  avatar: string | null;
}

export const Search = () => {
  // States
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string | null>(
    null
  );

  /* 
    Debounce: Update the value of 'debouncedSearchTerm',
    only when the user stops typing.
  */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Wait 500ms before executing the search.

    // Cleanup: if the user continues to type, cancels the previous timeout.
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Performs search only when 'debouncedSearchTerm' changes
  const { data: searchResults = [], isLoading } = useSearchUsers({
    search: debouncedSearchTerm ?? '',
    enabled: !!debouncedSearchTerm,
  });

  const results: ISearchResult[] = searchResults.map((user, index) => ({
    key: index,
    title: user.first_name,
    username: user.username,
    avatar: user.avatar,
  }));

  // Functions
  const handleSearchChange = (
    _: React.MouseEvent<HTMLElement>,
    data: SearchProps
  ) => {
    setSearchTerm(data.value || null);
  };

  const handleResultSelect = () => {
    setSearchTerm(null);
  };

  return (
    <SearchSemantic
      className="search-users"
      fluid
      input={{ icon: 'search', iconPosition: 'left' }}
      loading={isLoading}
      onSearchChange={handleSearchChange}
      results={results}
      onResultSelect={handleResultSelect}
      resultRenderer={(e) => <ResultSearch data={e as ISearchResult} />}
    />
  );
};

const ResultSearch: React.FC<{ data: ISearchResult }> = ({ data }) => (
  <Link
    className="search-users__item"
    to={generateUrl(usersPath.PROFILE, { username: data.username })}
  >
    <Image src={data.avatar || NO_IMAGE} />
    <div>
      <p>{data.title}</p>
      <p>{data.username}</p>
    </div>
  </Link>
);
