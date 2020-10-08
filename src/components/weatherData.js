import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

class WeatherData extends React.Component {
  render() {
    return (
      <ul className="pl-3 pr-0">
        {this.props.weather.map((li, index) => (
          <div key={li.name} id="weather-card" className="day-bg">
            <p>
              <b>{li.name}</b>
            </p>

            <p className="temperature">
              <b>{(li.main.temp - 273.15).toFixed(2)}°C</b>
            </p>
            <p className="feels-like">
              <span>
                Real Feel {(li.main.feels_like - 273.15).toFixed(2)}°C
              </span>
            </p>
            <p className="humidity">Humidity: {li.main.humidity}</p>
            {li.weather.map((weath) => (
              <div>
                <p className="text-capitalize mb-0">{weath.description}</p>
                <img
                  src={`https://openweathermap.org/img/w/${weath.icon}.png`}
                  alt="wthr img"
                  width="100"
                />
              </div>
            ))}
          </div>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return { weather: state.weather };
};
export default connect(mapStateToProps, { fetchWeather })(WeatherData);
