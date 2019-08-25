import React from "react";

const Hourly = ({ data }) => {
  
  if (!data) {
    return <p>Loading...</p>;
  }

  const next24HoursData = data.data.slice(0, 13);

  const formatTemperature = (temperature) => {
    return Math.floor(temperature);
  }

  const formatToPercentage = (value) => {
    return Math.trunc(value * 100);
  }

  return (
    <main>
      <table className="table-container">
        <thead>
          <tr>
            <th>Hour</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Precipitation</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {next24HoursData.map(hourlyWeather => {
            const date = new Date(hourlyWeather.time * 1000);
            const hour = date.getHours();
            return (
              <tr key={data.time} className="table-row">
                <td>{`${hour}:00`}</td>
                <td>{formatTemperature(hourlyWeather.temperature)} C°</td>
                <td>{formatToPercentage(hourlyWeather.humidity)} %</td>
                <td>{formatToPercentage(hourlyWeather.precipProbability)} %</td>
                <td>{hourlyWeather.summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Hourly;
