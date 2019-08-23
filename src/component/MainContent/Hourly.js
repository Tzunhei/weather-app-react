import React from "react";
import Weather from "./Weather";

const Hourly = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  const next24HoursData = data.data.slice(0, 13);

  return (
    <main>
        {next24HoursData.map(hourlyData => {
          const date = new Date(hourlyData.time * 1000);
          const hour = date.getHours();
          return (
              <Weather
                key={hourlyData.time}
                temperature={hourlyData.temperature}
                humidity={hourlyData.humidity}
                precipProbability={hourlyData.precipProbability}
                summary={hourlyData.summary}
              >
                <li>{`${hour}:00`}</li>
              </Weather>
          );
        })}
    </main>
  );
};

export default Hourly;
