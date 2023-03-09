import axios from "axios";

const apiDailyWeather = async (city) => {
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

  const dailyResponse = await axios.get(
    " http://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        cnt: 7,
        units: "metric",
        appid: "734ec92828c5fc4e96c3996621dae42d",
      },
    }
  );

  return dailyResponse;
};

export default apiDailyWeather;
