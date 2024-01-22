import React, { useState } from "react";
import "./App.css";

const Searchbar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter the city"
        className="search-input"
      />
      <button onClick={handleSearch} className={"search-btn"}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
