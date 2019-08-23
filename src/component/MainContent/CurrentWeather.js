import React from "react";
import Weather from "./Weather";

const CurrentWeather = ({ data }) => {
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

  let currentWeather;
  if (data) {
    const forecastDate = new Date(data.time * 1000);
    const dayOfWeek = dayOfWeekIndex[forecastDate.getDay()];
    const day = forecastDate.getDate();
    const month = monthIndex[forecastDate.getMonth()];

    currentWeather = (
      <Weather
        temperature={data.temperature}
        humidity={data.humidity}
        precipProbability={data.precipProbability}
        summary={data.summary}
      >
        <li>{`${dayOfWeek} ${day} ${month}`}</li>
      </Weather>
    );
  } else {
    currentWeather = <p>Loading...</p>;
  }

  return <main>{currentWeather}</main>;
};

export default CurrentWeather;
