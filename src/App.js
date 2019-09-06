import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App Components
import "./App.css";
import Header from "./component/Header/";
import CurrentWeatherWithLoading from "./component/HOC";
import Hourly from "./component/MainContent/Hourly";
import Forecast from "./component/MainContent/Forecast";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";

// API Request data
const latitude = "48.85341";
const longitude = "2.3488";
const apiKeyWeather = "bddf48665221b3a44dd9e5fb67fb7ade";
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKeyWeather}/${latitude},${longitude}?units=si`;

class App extends React.Component {
  state = {
    unit: "celsius",
    weather: [],
    isLoading: false,
  };

  handleUnitChange = unit => {
    this.setState({ unit });
  };

  setWeather = (result) => {
    this.setState({weather: result.data});
    this.setState({isLoading: false});
  }

  componentDidMount() {
    this.setState({isLoading: true});
    Axios.get(url)
      .then(responseData => this.setWeather(responseData))
      .catch(error =>
        console.log("Error from fecthing and parsing data", error)
      );
  }

  

  render() {
    return (
      <Router>
        <div className="container">
          <Header handleUnitChange={this.handleUnitChange} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CurrentWeatherWithLoading
                  data={this.state.weather.currently}
                  unit={this.state.unit}
                  isLoading={this.state.isLoading}
                />
              )}
            />
            <Route
              path="/hourly"
              render={() => (
                <Hourly
                  data={this.state.weather.hourly}
                  unit={this.state.unit}
                />
              )}
            />
            <Route
              path="/forecast"
              render={() => (
                <Forecast
                  data={this.state.weather.daily}
                  unit={this.state.unit}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

