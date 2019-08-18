import React from 'react';
import CurrentWeather from './CurrentWeather';

class Weather extends React.Component {
  
  render(){
    const {weather} = this.state;
    console.log(weather);
    return (
      <div>
        <CurrentWeather data={weather.currently}/>
      </div>
    );
  }

}

export default Weather;