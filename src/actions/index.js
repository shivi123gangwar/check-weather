import axios from "axios";

export const fetchWeather = (city) => async (dispatch) => {
  const API_KEY = "553e303834e8c57d0a907a27a6b451fe";
  var city_name = city;
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city_name +
      "&appid=" +
      API_KEY
  );
  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};
