import React from 'react';
import '../assets/styles/SearchBar.css'; // Import CSS for styling

const SearchBar = ({ search, setSearch, setQuery }) => {
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <form className="search-form" onSubmit={getSearch}>
      <div className="search-container">
        <div className="search-input-container">
          <label htmlFor="full-name" className="search-label">Search Recipe</label>
          <br/>
          <input
            type="text"
            id="full-name"
            name="full-name"
            value={search}
            onChange={updateSearch}
            className="search-input"
          />
        </div>
        <br/>
        <button type="submit" className="search-button">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;







