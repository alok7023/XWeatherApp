import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import "./App.css";
import { useState } from "react";
// const API_KEY = `a10943187fc8421196281900242201`;
function App() {
  const [city, setCity] = useState();
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherCard city={city} />
    </div>
  );
}

export default App;
