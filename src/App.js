import { useEffect, useState } from "react";
import "./css/App.css";
import WeatherData from "./WeatherData";

/*Api call*/
import citySearch from "./apiCurrentWeather";

function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchFirstData();
  }, []);

  /*useState init*/
  const [cityName, setCityName] = useState("Prague");
  const [showWeather, setShowWeather] = useState({
    degrees: 0,
    place: ["Prague, CZ"],
    clouds: "cloudy",
    icon: "",
    unixTimestamp: "Monday, March 6, 2023 9:10:08 PM",
  });

  const [showWeatherData, setShowWeatherData] = useState(null);

  /*Fetching and displaying data on load*/
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

    setShowWeatherData(firstResponse.data);
    setCityName("");
  };

  /*Getting and displaying data on search with a city parameter*/
  const getData = async (event) => {
    event.preventDefault();

    const response = await citySearch(cityName);

    setShowWeather({
      ...showWeather,
      degrees: response.data.main.temp,
      place: [response.data.name, response.data.sys.country],
      icon: response.data.weather[0].icon,
      clouds: response.data.weather[0].description,
      unixTimestamp: response.data.dt,
    });

    setShowWeatherData(response.data);
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
        <button
          onClick={(e) => {
            setClicked(!clicked);
            getData(e);
          }}
        >
          Search
        </button>
      </form>

      <WeatherData
        showWeather={showWeather}
        showWeatherData={showWeatherData}
        icon={showWeather.icon}
        cityName={cityName}
        clicked={clicked}
      />
    </div>
  );
}

export default App;
