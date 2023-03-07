import { useState, useEffect } from "react";
import "./css/App.css";
import citySearch from "./apiCurrentWeather";
import WeatherData from "./WeatherData";
import dailyWeather from "./apiDailyWeather";

function App() {
  useEffect(() => {
    fetchFirstData();
  }, []);

  const [cityName, setCityName] = useState("Prague");
  const [showWeather, setShowWeather] = useState({
    degrees: 0,
    place: ["Prague, CZ"],
    clouds: "cloudy",
    icon: "",
    unixTimestamp: "Monday, March 6, 2023 9:10:08 PM",
  });

  const fetchFirstData = async () => {
    const firstResponse = await citySearch(cityName);

    setShowWeather({
      ...showWeather,
      degrees: firstResponse.data.main.temp,
      place: [firstResponse.data.name, firstResponse.data.sys.country],
      icon: firstResponse.data.weather[0].icon,
      clouds: firstResponse.data.weather[0].description,
      unixTimestamp: firstResponse.data.dt,
    });
    console.log(showWeather);
  };

  const getData = async (event) => {
    event.preventDefault();

    const response = await citySearch(cityName);

    setShowWeather({
      ...showWeather,
      degrees: response.data.main.temp,
      place: [response.data.name, response.data.sys.country],
      clouds: response.data.weather[0].description,
      unixTimestamp: response.data.dt,
    });

    setCityName("");
  };

  const changeCityName = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="weather-container flex-center">
      <form>
        <input
          value={cityName}
          onChange={changeCityName}
          placeholder="City name ..."
        ></input>
        <button onClick={getData}>Search</button>
      </form>

      <WeatherData
        showWeather={showWeather}
        icon={showWeather.icon}
        //dailyResponse={dailyResponse}
      />
    </div>
  );
}

export default App;
