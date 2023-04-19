import { useEffect, useState } from "react";
import DailyWeather from "./DailyWeather";
import apiDailyWeather from "./apiDailyWeather";

function WeatherData({ showWeather, icon, cityName, clicked }) {
  const yearlyTime = new Date(
    showWeather.unixTimestamp * 1000
  ).toLocaleDateString("en-GB");
  const time = new Date(showWeather.unixTimestamp * 1000).toLocaleTimeString(
    "en-GB"
  );

  /************/

  /*Getting and displaying data on load*/
  useEffect(() => {
    firstFetch();
  }, []);

  const [renderedDays, setRenderedDays] = useState();

  const firstFetch = async () => {
    const firstResponse = await apiDailyWeather(cityName);

    setRenderedDays(
      firstResponse.data.list.map((day) => {
        return (
          <DailyWeather
            icon={day.weather.icon}
            degrees={day.main.temp}
            time={day.dt}
            key={day.dt}
          />
        );
      })
    );
  };

  /*Updating data everytime variable changes*/
  useEffect(() => {
    const identifier = setTimeout(() => {
      fetchUpdatedData();
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [clicked]);

  const fetchUpdatedData = async () => {
    const response = await apiDailyWeather(cityName);
    console.log(response.data);
    setRenderedDays(
      response.data.list.map((day) => {
        return (
          <DailyWeather
            icon={day.weather.icon}
            degrees={day.main.temp}
            time={day.dt}
            key={day.dt}
          />
        );
      })
    );
  };

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
        </div>
        <div className="flex-center">
          <p className="data-weather">{showWeather.clouds}</p>
          <img src={`./img/icons/${icon}@2x.png`} alt="icon"></img>
        </div>
        <h1 className="data-degrees">{showWeather.degrees}°C</h1>
      </div>

      <div className="weather-data-next">{renderedDays}</div>
    </>
  );
}

export default WeatherData;
