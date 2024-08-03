// src/components/Search.js
import React, { useState, useEffect } from "react";

const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]); // Runs every time `query` changes

  return (
    <div>
      <h2>Search Fruits</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
