import { useState } from "react";
import "./css/App.css";
import citySearch from "./api";
import WeatherData from "./WeatherData";

function App() {
  const [cityName, setCityName] = useState("Prague");

  const [showWeather, setShowWeather] = useState({
    degrees: 0,
    place: ["Prague, CZ"],
    clouds: "cloudy",
  });

  const getData = async (event) => {
    event.preventDefault();

    const response = await citySearch(cityName);

    setShowWeather({
      ...showWeather,
      degrees: response.data.main.temp,
      place: [response.data.name, response.data.sys.country],
      clouds: response.data.weather[0].description,
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

      <WeatherData showWeather={showWeather} cityName={cityName} />
    </div>
  );
}

export default App;
