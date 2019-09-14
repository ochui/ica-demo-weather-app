import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherConditions } from "../utils/weatherConditions";

const Weather = ({ imageUrl, weather }) => {
  console.log(weather);
  return (
    <ImageBackground
      source={{
        uri: imageUrl
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={[
          styles.weatherContainer
          // { backgroundColor: '#7af' }
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={72} name={weatherConditions[weather.weather[0].main].icon} color={"#fff"} />
          <Text style={styles.tempText}>{weather.main.temp}°</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather.weather[0].main].title}</Text>
          <Text style={styles.subtitle}>{weatherConditions[weather.weather[0].main].subtitle}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  tempText: {
    fontSize: 72,
    color: "#fff"
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: "#fff"
  },
  subtitle: {
    fontSize: 24,
    color: "#fff"
  }
});

export default Weather;
