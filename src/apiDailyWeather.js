import axios from "axios";

const apiDailyWeather = async (city) => {
  const latLonResponse = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
      },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_KEY_API}`,
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
      },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_KEY_API}`,
      },
    }
  );

  console.log(`${process.env.REACT_APP_KEY_API}`, "50400000000000");
  return dailyResponse;
};

export default apiDailyWeather;
