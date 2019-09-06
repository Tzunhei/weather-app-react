import React from "react";
import Weather from "./Weather";

const CurrentWeather = ({ data, unit }) => {
  const dayOfWeekIndex = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };

  const monthIndex = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };

  const convertToF = (celsius) => {
    return Math.floor(celsius * (9/5) + 32);
  }

  let currentWeather;
  if (data) {
    const forecastDate = new Date(data.time * 1000);
    const dayOfWeek = dayOfWeekIndex[forecastDate.getDay()];
    const day = forecastDate.getDate();
    const month = monthIndex[forecastDate.getMonth()];

    currentWeather = (
      <Weather
        temperature={unit=== "celsius" ? data.temperature: convertToF(data.temperature)}
        humidity={data.humidity}
        precipProbability={data.precipProbability}
        summary={data.summary}
        unit={unit}
      >
        <li>{`${dayOfWeek} ${day} ${month}`}</li>
      </Weather>
    );
  }
  return <main>{currentWeather}</main>;
};

export default CurrentWeather;
