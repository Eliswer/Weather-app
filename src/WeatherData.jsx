import { useEffect, useState } from "react";
import DailyWeather from "./DailyWeather";
import apiDailyWeather from "./apiDailyWeather";

function WeatherData({ dataCity, cityName }) {
  const yearlyTime = new Date(
    dataCity.dt.unixTimestamp * 1000
  ).toLocaleDateString("en-GB");
  const time = new Date(dataCity.dt.unixTimestamp * 1000).toLocaleTimeString(
    "en-GB"
  );
  console.log(dataCity);

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

  const fetchUpdatedData = async () => {
    const response = await apiDailyWeather(cityName);

    setRenderedDays(
      await response.data.list.map((day) => {
        return (
          <DailyWeather
            degrees={day.main.temp}
            time={day.dt}
            key={response.data.list[day]}
          />
        );
      })
    );
    console.log(renderedDays);
  };

  return (
    <>
      <div className="weather-data flex-center">
        <div className="weather-data-top">
          <p className="data-city">
            s{/*} {showWeather.place[0]}, {showWeather.place[1]} */}
          </p>
          <p className="data-time">
            s{yearlyTime} {time}
          </p>
        </div>
        <div className="flex-center">
          <p className="data-weather">{/*{showWeather.clouds} */}s</p>
          <img alt="icon">s</img>
        </div>
        <h1 className="data-degrees">s{/*{showWeather.degrees}*/}°C</h1>
      </div>

      <div className="weather-data-next">{renderedDays}</div>
    </>
  );
}

export default WeatherData;
