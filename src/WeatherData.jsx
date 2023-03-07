import React from "react";
import timeConvert from "./timeZoneApi";

function WeatherData({ showWeather, cityName }) {
  timeConvert("Tokyo");

  const getTimeData = async () => {
    const time = await timeConvert(cityName);
  };

  return (
    <div className="weather-data flex-center">
      <div className="weather-data-top">
        <p className="data-city">
          {showWeather.place[0]}, {showWeather.place[1]}
        </p>
        <p className="data-time"></p>
      </div>
      <h1 className="data-degrees">{showWeather.degrees}°C</h1>
      <div className="weather-data-bottom">
        <p className="data-weather">{showWeather.clouds}</p>
        <p className="data-tomorrow">Tomorrow: 27°C</p>
      </div>
    </div>
  );
}

export default WeatherData;
