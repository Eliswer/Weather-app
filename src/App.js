import { useState } from "react";
import "./css/App.css";
import citySearch from "./apiCurrentWeather";
import WeatherData from "./WeatherData";
import dailyWeather from "./apiDailyWeather";

function App() {
  const [cityName, setCityName] = useState("Prague");
  const [icon, setIcon] = useState();
  const [showWeather, setShowWeather] = useState({
    degrees: 0,
    place: ["Prague, CZ"],
    clouds: "cloudy",
    unixTimestamp: "Monday, March 6, 2023 9:10:08 PM",
  });

  const getData = async (event) => {
    event.preventDefault();

    const response = await citySearch(cityName);
    const dailyResponse = await dailyWeather(cityName);

    setIcon(response.data.weather[0].icon);
    console.log(icon);

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
        icon={icon}
        //dailyResponse={dailyResponse}
      />
    </div>
  );
}

export default App;
