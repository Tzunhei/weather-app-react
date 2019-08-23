import React from "react";
import Weather from "./Weather";

const Forecast = ({ data }) => {
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

  let forecast;
  if (!data) {
    return null;
  } else {
    forecast = data.data.map(day => {
      const forecastDate = new Date(day.time * 1000);
      const dayOfWeek = dayOfWeekIndex[forecastDate.getDay()];
      const dayNumber = forecastDate.getDate();
      const month = monthIndex[forecastDate.getMonth()];
      return (
        <Weather
        key={day.time}
        temperature={day.temperatureHigh}
        humidity={day.humidity}
        precipProbability={day.precipProbability}
        summary={day.summary}
      >
        <li>{`${dayOfWeek} ${dayNumber} ${month}`}</li>
      </Weather>
      );
    });
  }

  return <main>{forecast}</main>;
};

export default Forecast;
