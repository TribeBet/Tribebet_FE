"use client";
// components/SearchComponent.js
import { useState } from 'react';
import { searchDatabase } from '../lib/data';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform a search in the database
    const results = searchDatabase(query);
    setSearchResults(results);
  };

  return (
    <div className="p-4 flex flex-col items-center lg:flex-row lg:text-left lg:w-1/2 lg:mx-auto">
  <div className="flex items-center w-full lg:w-2/3 mb-4 lg:mb-0">
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full px-4 py-2 text-black rounded-full focus:outline-none focus:ring focus:border-purple-500"
    />
    <button
      onClick={handleSearch}
      className="ml-2 px-4 py-2 bg-purple-700 text-white rounded-full focus:outline-none hover:bg-purple-800"
    >
      Search
    </button>
  </div>
  <div className="mt-4 lg:mt-0">
    {searchResults.map((result) => (
      <div key={result.id} className="bg-gray-800 p-2 mb-2 rounded">
        {result.name}
      </div>
    ))}
  </div>
</div>

  );
};

export default Search;
