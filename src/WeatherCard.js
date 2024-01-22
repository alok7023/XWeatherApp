import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCards from "./WeatherCards";

const URL = `https://api.weatherapi.com/v1/current.json`;
const API_KEY = `a10943187fc8421196281900242201`;
const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (city) {
      setloading(true);
      axios
        .get(URL, { params: { key: API_KEY, q: city } })
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.log("error", error))
        .finally(() => setloading(false));
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-ctn">
          <WeatherCards title="Temperature" data={weatherData.current.temp_c} />
          <WeatherCards title="Humidity" data={weatherData.current.humidity} />
          <WeatherCards
            title="Conditon"
            data={weatherData.current.condition.text}
          />
          <WeatherCards title="WindSpeed" data={weatherData.current.wind_kph} />
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
