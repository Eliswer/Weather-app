import { useState } from "react";
import "./css/App.css";
import citySearch from "./api";
import WeatherData from "./WeatherData";

function App() {
  const [cityName, setCityName] = useState("Prague");
<<<<<<< HEAD

=======
  const [icon, setIcon] = useState();
>>>>>>> parent of 6e029d9 (fetch data on load)
  const [showWeather, setShowWeather] = useState({
    degrees: 0,
    place: ["Prague, CZ"],
    clouds: "cloudy",
<<<<<<< HEAD
=======
    unixTimestamp: "Monday, March 6, 2023 9:10:08 PM",
>>>>>>> parent of 6e029d9 (fetch data on load)
  });

  const getData = async (event) => {
    event.preventDefault();

    const response = await citySearch(cityName);
<<<<<<< HEAD
=======
    const dailyResponse = await dailyWeather(cityName);

    setIcon(response.data.weather[0].icon);
    console.log(icon);
>>>>>>> parent of 6e029d9 (fetch data on load)

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

<<<<<<< HEAD
      <WeatherData showWeather={showWeather} cityName={cityName} />
=======
      <WeatherData
        showWeather={showWeather}
        icon={icon}
        //dailyResponse={dailyResponse}
      />
>>>>>>> parent of 6e029d9 (fetch data on load)
    </div>
  );
}

export default App;
