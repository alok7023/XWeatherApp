import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const URL = `https://api.weatherapi.com/v1/current.json`;
const API_KEY = `a10943187fc8421196281900242201`;
const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (city) {
      setloading(true);
      axios
        .get(URL, { params: { key: API_KEY, q: city } })
        .then((response) => setWeatherData(response.data))
        .catch((error) => {
          console.error("Error fetching data: ", error);
          alert("Failed to fetch weather data");
        })
        .finally(() => {
          setloading(false);
        });
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-cards">
          <WeatherCard title="Temperature" data={weatherData.current.temp_c} />
          <WeatherCard title="Humidity" data={weatherData.current.humidity} />
          <WeatherCard
            title="Conditon"
            data={weatherData.current.condition.text}
          />
          <WeatherCard title="WindSpeed" data={weatherData.current.wind_kph} />
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
