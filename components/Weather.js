import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Weather = () => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://cdn.pixabay.com/photo/2016/11/29/13/20/acoustic-guitar-1869787_960_720.jpg"
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
          <MaterialCommunityIcons size={72} name={"cloud"} color={"#fff"} />
          <Text style={styles.tempText}>45°</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Test</Text>
          <Text style={styles.subtitle}>Testing</Text>
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
