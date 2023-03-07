import { useEffect, useState } from "react";
import DailyWeather from "./DailyWeather";
import apiDailyWeather from "./apiDailyWeather";

function WeatherData({ showWeather, icon, cityName }) {
  const yearlyTime = new Date(
    showWeather.unixTimestamp * 1000
  ).toLocaleDateString("en-GB");
  const time = new Date(showWeather.unixTimestamp * 1000).toLocaleTimeString(
    "en-GB"
  );

  /************/

  const [dailyData, setDailyData] = useState({
    time: "",
    degrees: 0,
  });

  useEffect(() => {
    firstFetch();
  }, []);

  const firstFetch = async () => {
    const firstResponse = await apiDailyWeather(cityName);

    setDailyData({
      ...dailyData,
      time: firstResponse,
      degrees: firstResponse.data.list,
    });
  };

  /*Upating data everytime variable icon changes*/
  useEffect(() => {
    fetchUpdatedData();
  }, [icon]);

  const fetchUpdatedData = async () => {};

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

      <div className="weather-data-next">
        <DailyWeather degrees={10} day={"Mo"} />
        <DailyWeather degrees={10} day={"Tue"} />
        <DailyWeather degrees={10} day={"Wed"} />
        <DailyWeather degrees={10} day={"Thu"} />
        <DailyWeather degrees={10} day={"Fri"} />
        <DailyWeather degrees={10} day={"Sat"} />
        <DailyWeather degrees={10} day={"Sun"} />
      </div>
    </>
  );
}

export default WeatherData;
