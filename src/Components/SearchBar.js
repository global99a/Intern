import React, { useState, useEffect } from 'react';

const SearchHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load search history from local storage on initial render
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    // Save search history to local storage whenever it changes
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory([...searchHistory, searchTerm]);
      setSearchTerm('');
    }
  };

  const handleSortByName = () => {
    const sortedHistory = [...searchHistory].sort();
    setSearchHistory(sortedHistory);
  };

  return (
    <div>
      <h1>Search History</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <ul>
        {searchHistory.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
