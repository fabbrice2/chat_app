import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-md p-1">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="w-full text-xs focus:outline-0"
        type="text"
        placeholder="Rechercher ou demarer une discussion"
      />
    </div>
  );
}

export default SearchBar;
