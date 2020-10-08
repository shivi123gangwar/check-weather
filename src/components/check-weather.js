import React from "react";
import Input from "./Input";
import WeatherData from "./weatherData";

class CheckWeather extends React.Component {
  renderWeather() {
    return (
      <div className="pt-5 text-center">
        <Input />
        <WeatherData />
      </div>
    );
  }
  render() {
    return <div className="main-container">{this.renderWeather()}</div>;
  }
}

export default CheckWeather;
