import React from "react";
import DailyWeather from "./DailyWeather";

function WeatherData({ showWeather, icon, dailyResponse }) {
  const yearlyTime = new Date(
    showWeather.unixTimestamp * 1000
  ).toLocaleDateString("en-GB");
  const time = new Date(showWeather.unixTimestamp * 1000).toLocaleTimeString(
    "en-GB"
  );

  return (
    <>
      <div className="weather-data flex-center">
        <div className="weather-data-top">
          <p className="data-city">
            {showWeather.place[0]}, {showWeather.place[1]}
          </p>
          <p className="data-time">
            {yearlyTime} {time}
          </p>
          <p className="data-weather">{showWeather.clouds}</p>
        </div>
        <img src={`./img/icons/${icon}@2x.png`} alt="icon"></img>
        <h1 className="data-degrees">{showWeather.degrees}°C</h1>
      </div>

      <div className="weather-data-next">
        <DailyWeather degrees={10} day={"Mo"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Tue"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Wed"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Thu"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Fri"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Sat"} dailyResponse={dailyResponse} />
        <DailyWeather degrees={10} day={"Sun"} dailyResponse={dailyResponse} />
      </div>
    </>
  );
}

export default WeatherData;
