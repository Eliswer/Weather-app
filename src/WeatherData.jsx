import { useEffect, useState } from "react";
import DailyWeather from "./DailyWeather";
import apiDailyWeather from "./apiDailyWeather";

function WeatherData({ showWeather, icon, cityName, change }) {
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
    console.log(firstResponse);

    setRenderedDays(
      firstResponse.data.list.map((day) => {
        return (
          <DailyWeather
            degrees={day.main.temp}
            time={day.dt}
            key={firstResponse.data.list[day]}
          />
        );
      })
    );
  };

  /*Upating data everytime variable changes*/
  useEffect(() => {
    fetchUpdatedData();
  }, [change]);

  const fetchUpdatedData = async () => {
    console.log("fetchUpdatedData has been called");
    const response = await apiDailyWeather(cityName);
    console.log(cityName);
    console.log("response from apiDailyWeather:", response);

    setRenderedDays(
      response.data.list.map((day) => {
        return (
          <DailyWeather
            degrees={day.main.temp}
            time={day.dt}
            key={response.data.list[day]}
          />
        );
      })
    );
    console.log(change);
    console.log(renderedDays);
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
