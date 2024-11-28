import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value); // Appelle une fonction parent pour effectuer la recherche
    }
  };

  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-md p-1">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="w-full text-xs focus:outline-0"
        type="text"
        placeholder="Rechercher ou démarrer une discussion"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
