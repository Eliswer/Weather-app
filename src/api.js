import axios from "axios";

const citySearch = async (city) => {
  const latLonResponse = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
        appid: "f8317eb24fadb65927f631c2ab7ddd46",
      },
    }
  );

  const lat = await latLonResponse.data[0].lat;
  const lon = await latLonResponse.data[0].lon;

  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        units: "metric",
        appid: "f8317eb24fadb65927f631c2ab7ddd46",
      },
    }
  );

  return response;
};

export default citySearch;
