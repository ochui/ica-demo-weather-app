import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { PulseIndicator } from "react-native-indicators";

const standardMessage = "Getting your location";
const longLoadingMessage = "We still working on it";
const messagePostfixes = ["", ".", "..", "..."];

class Loading extends Component {
  
  componentDidMount = () => {
    console.log('hola')
  }

  render() {
    return (
      <View style={styles.locationContainer}>
        <View>
          <PulseIndicator color='white' size={80} />
          <Text> Getting your location </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C4866"
  }
});

export default Loading;
