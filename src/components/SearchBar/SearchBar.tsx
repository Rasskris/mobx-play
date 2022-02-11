import { ChangeEvent, FC, KeyboardEvent } from 'react';
import { observer } from 'mobx-react';
import { bookStore } from '../../store';

export const SearchBar: FC = () => {
  const { isLoading, query, setQuery, searchByAuthor, onSearch } = bookStore;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  const handleSearch = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <input
        placeholder="Search"
        value={query}
        disabled={isLoading}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
      <input
        id="searchByAuthor"
        type="checkbox"
        checked={searchByAuthor.value}
        onChange={searchByAuthor.toggle}
      />
      <label htmlFor="searchByAuthor">Search by author</label>
    </>
  );
};

export default observer(SearchBar);
