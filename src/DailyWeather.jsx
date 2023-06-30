import React from "react";
import "./css/DailyWeather.css";

function DailyWeather({ degrees, time, icon }) {
  console.log(icon);

  /*Time and month from a unix code*/
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const day = date.getDay();
  let month = date.getMonth();

  /*Display month from an array instead of number*/
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  month = months[month];

  return (
    <>
      <div className="daily-container">
        <p className="bold days">
          {day}/{month} {hours}:00
        </p>
        <img src={`./img/icons/${icon}@2x.png`} alt="icon"></img>
        <h1 className="bold">{degrees}°C</h1>
        <p>temperature</p>
      </div>
    </>
  );
}

export default DailyWeather;
