import {
  Search as SearchSemantic,
  Image,
} from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../../../gql/user';
import { useEffect, useState } from 'react';
import { size } from 'lodash';
import { Link } from 'react-router-dom';
import ImageNotFound from '../../../assets/avatar.png';
import './Search.scss';

function Search() {
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);
  const { data, loading } = useQuery(SEARCH, {
    variables: { search },
  });

  useEffect(() => {
    if (size(data?.search) > 0) {
      const users = [];

      data.search.forEach((user, index) => {
        users.push({
          key: index,
          title: user.name,
          username: user.username,
          avatar: user.avatar,
        });
      });

      setResults(users);
    } else {
      setResults([]);
    }
  }, [data]);

  const onChange = (e) => {
    if (e.target.value) {
      setSearch(e.target.value);
    } else {
      setSearch(null);
    }
  };

  const handleResultSelect = () => {
    setSearch(null);
    setResults([]);
  };

  return (
    <SearchSemantic
      className="search-users"
      fluid
      input={{ icon: 'search', iconPosition: 'left' }}
      loading={loading}
      value={search ?? ''}
      onSearchChange={onChange}
      results={results}
      onResultSelect={handleResultSelect}
      resultRenderer={(e) => <ResultSearch data={e} />}
    />
  );
}

function ResultSearch({ data }) {
  return (
    <Link
      className="search-users__item"
      to={`/${data.username}`}
    >
      <Image src={data.avatar ? data.avatar : ImageNotFound} />
      <div>
        <p>{data.title}</p>
        <p>{data.username}</p>
      </div>
    </Link>
  );
}

export default Search;
