import React from "react";
import "./css/DailyWeather.css";

function DailyWeather({ degrees, day, dailyResponse }) {
  return (
    <>
      <div className="daily-container">
        <p className="bold days">{day}</p>
        {/* <img src={dailyResponse.data.list[0].weather[0].icon + "@2x.png"}></img> */}
        <h1 className="bold">{degrees}°C</h1>
        <p>max temp</p>
      </div>
    </>
  );
}

export default DailyWeather;
