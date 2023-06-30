import axios from "axios";

const citySearch = async (city) => {
  const latLonResponse = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
        appid: "734ec92828c5fc4e96c3996621dae42d",
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
        appid: "734ec92828c5fc4e96c3996621dae42d",
      },
    }
  );

  return response;
};

export default citySearch;
