import React, { Component } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Platform } from "react-native";
import axios from "axios";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

const API_KEY = "8380c75d07b8222a7a1e25141b26842c";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      location: null,
      errorMessage: null,
      imageUrl: null,
      weather: null
    };
  }

  componentWillMount = () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    // Request data from openweathermap
    this._getWeatherAsync(location);
  };

  _getWeatherAsync = async location => {
    try {
      weather = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=${API_KEY}&units=metric`
      );
    } catch (error) {
      console.log(error.response);
    }
    this.setState({ weather: weather.data });
    this._getPictureAsync(weather.data.weather[0].description);
  };

  _getPictureAsync = async condition => {
    try {
      images = await axios.get(
        `https://pixabay.com/api/?key=4656005-f9f2294a9b13c86fc0d60621f&q=${encodeURI(
          condition
        )}&image_type=photo&pretty=true`
      );
    } catch (error) {
      console.log(error);
    }
    let randomImage =
      images.data.hits[Math.floor(Math.random() * images.data.hits.length)];
    this.setState({
      isLoading: false,
      imageUrl: randomImage.largeImageURL
    });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <Weather imageUrl={this.state.imageUrl} weather={this.state.weather} />
      );
    }
  }
}

export default App;
