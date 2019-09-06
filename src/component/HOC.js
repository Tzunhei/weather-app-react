import React from 'react';

import Loading from './Loading';
import CurrentWeather from './MainContent/CurrentWeather'

const withLoading = (Component) => ({isLoading, ...rest}) => (
  isLoading
  ? <Loading />
  : <Component {...rest}/>
)

const CurrentWeatherWithLoading = withLoading(CurrentWeather);

export default CurrentWeatherWithLoading;