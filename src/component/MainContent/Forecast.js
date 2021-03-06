import React from "react";

const Forecast = ({ data, unit }) => {
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

  const formatTemperature = (temperature) => {
    return Math.floor(temperature);
  }

  const formatToPercentage = (value) => {
    return Math.trunc(value * 100);
  }

  const convertToF = (celsius) => {
    return Math.floor(celsius * (9/5) + 32);
  }

  if (!data) return null;

  return (
    <main>
      <table className="table-container">
        <thead>
          <tr>
            <th>Date</th>
            <th>Low</th>
            <th>High</th>
            <th>Humidity</th>
            <th>Precipitation</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(day => {
            const forecastDate = new Date(day.time * 1000);
            const dayOfWeek = dayOfWeekIndex[forecastDate.getDay()];
            const dayNumber = forecastDate.getDate();
            const month = monthIndex[forecastDate.getMonth()];
            return (
              <tr key={day.time} className="table-row">
                <td>{`${dayOfWeek} ${dayNumber} ${month}`}</td>
                <td>{unit==="celsius" ? formatTemperature(day.temperatureLow) : convertToF(formatTemperature(day.temperatureLow))} {unit==="celsius" ? "C°" : "F°"}</td>
                <td>{unit==="celsius" ? formatTemperature(day.temperatureHigh) : convertToF(formatTemperature(day.temperatureHigh))} {unit==="celsius" ? "C°" : "F°"}</td>
                <td>{formatToPercentage(day.humidity)} %</td>
                <td>{formatToPercentage(day.precipProbability)} %</td>
                <td>{day.summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Forecast;
