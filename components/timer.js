import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Timer extends Component {
  state = {
    textValue: "Change me",
  };

  onPress = () => {
    this.setState({
      textValue: "THE NEW TEXT GOES HERE",
    });
  };

  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <Text>{this.state.textValue}</Text>
        <Button title="Change Text" onPress={this.onPress} />
      </View>
    );
  }
}
