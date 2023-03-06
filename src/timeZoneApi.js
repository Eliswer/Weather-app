import axios from "axios";

const timeConvert = async (city) => {
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

  console.log(lat, lon);

  const timezone = await axios.get(
    "https://www.timeapi.io/api/TimeZone/coordinate",
    {
      params: {
        latitude: lat,
        longitude: lon,
      },
    }
  );

  console.log(timezone);
  return timezone;
};

export default timeConvert;
