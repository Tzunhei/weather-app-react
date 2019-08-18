import React from "react";

const CurrentWeather = ({ data }) => {
  let currentWeather;

  if (data) {
    currentWeather = (
      <div>
        <h2>Paris, France</h2>
        <ul>
          <li>Temperature: {data.temperature}</li>
          <li>Humidity: {data.humidity}</li>
          <li>Chances of Precipitation: {data.precipProbability}</li>
          <li>Summary: {data.summary}</li>
        </ul>
      </div>
    );
  } else {
    currentWeather = <p>Loading...</p>;
  }

  return <div>{currentWeather}</div>;
};

export default CurrentWeather;
