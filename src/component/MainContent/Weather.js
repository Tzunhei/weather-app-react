import React from "react";

const Weather = ({
  children,
  temperature,
  humidity,
  precipProbability,
  summary,
  unit
}) => {
  const formatTemperature = (temperature) => {
    return Math.floor(temperature);
  }

  const formatToPercentage = (value) => {
    return Math.trunc(value * 100);
  }

  return (
    <ul className="info-container">
      {children}
      <li className="temperature-info">{`${formatTemperature(temperature)} ${unit==="celsius" ? "C°" : "F°"}`}</li>
      <div className="extra-info-container">
        <li className="humidity-info">
          <p>Humidity</p>
          {formatToPercentage(humidity)} %
        </li>
        <li className="precip-info">
          <p>Precipitation</p>
          {formatToPercentage(precipProbability)} %
        </li>
      </div>
      <li className="summary-info">{summary}</li>
    </ul>
  );
};

export default Weather;
