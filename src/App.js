import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";
import { useState } from "react";
// const API_KEY = `a10943187fc8421196281900242201`;
function App() {
  const [city, setCity] = useState("");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
