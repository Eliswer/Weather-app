import { useEffect, useState } from "react";
import "./css/App.css";
import WeatherData from "./WeatherData";

/*Api call*/
import citySearch from "./apiCurrentWeather";

function App() {
  WeatherData();
  /*useState init*/
  const [cityName, setCityName] = useState("Prague");
  const [dataCity, setDataCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*Fetching and displaying data on load*/
  const getJSON = async () => {
    try {
      const data = await citySearch(cityName);

      setDataCity(data.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  /*Getting and displaying data on search with a city parameter*/
  const getData = async (event) => {
    event.preventDefault();
    if (!cityName) return;
    setCityName("");
  };

  useEffect(() => {
    getJSON();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="weather-container flex-center">
      <form>
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="City name ..."
        ></input>
        <button onClick={getData}>Search</button>
      </form>

      <WeatherData dataCity={dataCity} cityName={cityName} />
    </div>
  );
}

export default App;
