import React from 'react';
import Axios from 'axios';

import CurrentWeather from './CurrentWeather';

const latitude = '48.85341';
const longitude = '2.3488';
const apiKeyWeather = '9002d79af400e68e99903bb3b7fbd7ed';
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKeyWeather}/${latitude},${longitude}?units=si`;

class Weather extends React.Component {
  
  state = {
    weather: []
  }

  componentDidMount(){
    Axios.get(url)
      .then(responseData => this.setState({weather: responseData.data}))
      .catch(error => console.log("Error from fecthing and parsing data", error));
  }

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