import React, { useState } from "react";
import axios from "axios";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const API_KEY = "230aae236e20592bf41f237747497e50";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (cityName) => {
    setCity(cityName);
    if (cityName) {
      getWeather(cityName);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CityInput onCityChange={handleCityChange} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;
