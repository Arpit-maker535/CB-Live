import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
