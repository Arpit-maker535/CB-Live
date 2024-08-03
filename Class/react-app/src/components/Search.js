import React, { useEffect, useState } from "react";

const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  return (
    <div>
      <h1>Search Fruit</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
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
