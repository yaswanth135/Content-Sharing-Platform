import React, { useState } from 'react';
import './SearchBarPage.css';

const SearchBarPage=(props)=> {

  const {onSearch}=props
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Posts"
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBarPage;