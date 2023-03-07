import React from "react";
import "./css/DailyWeather.css";

function DailyWeather({ degrees, day }) {
  return (
    <>
      <div className="daily-container">
        <p className="bold days">{day}</p>
        <img></img>
        <h1 className="bold">{degrees}°C</h1>
        <p>max temp</p>
      </div>
    </>
  );
}

export default DailyWeather;
