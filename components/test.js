import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StartButton from "./button";
import Timer from "./timer";
import CountDown from "react-native-countdown-component";
import { Entypo } from "@expo/vector-icons";

export default function Test() {
  const [open, SetStart] = useState(true);
  const onPressStart = () => {
    SetStart(!open);
  };
  if (open) {
    return (
      <View style = {{flexDirection:'row',alignItems:'flex-end',}}>
            <TouchableOpacity style = {styles.blankButton}>
            </TouchableOpacity>
        <TouchableOpacity onPress={onPressStart} style={styles.startBackground}>
          <Text style={styles.startText}>{"Start!"} </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    var sec = 1;
    return (
      <View style = {{flexDirection:'row',alignItems:'flex-end',}}>
        <TouchableOpacity onPress={onPressStart} style = {styles.resetButton}>
            <Entypo
                name="back-in-time"
                size={26}
                color="black"
              />
        </TouchableOpacity>

        <TouchableOpacity style={styles.startBackground}>
          <CountDown
            until={5 * sec}
            style={styles.buttonStyle}
            digitStyle={{ backgroundColor: "#00205B" }}
            digitTxtStyle={{ color: "#FFFFFF" }}
            onFinish={() => alert("finished")}
            timeToShow={["S"]}
            timeLabels={{}}
            size={13.5}
            onFinish={onPressStart}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startBackground: {
    backgroundColor: "#00205B",
    borderRadius: 10,
    //borderWidth: 10,
    borderColor: "#FFFFFF",
    alignItems: "center",
    //padding: 5,
    width: 90,
    height: 35,
  },
  startText: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingTop: 5,
  },
  resetButton: {
    // backgroundColor: "red",
    borderRadius: 10,
    //borderWidth: 10,
    borderColor: "#FFFFFF",
    alignItems: "center",
    //padding: 5,
    width: 35,
    height: 35,
    justifyContent: 'center'
  },
  blankButton: {
    backgroundColor: "#F3F2F3",
    borderRadius: 10,
    //borderWidth: 10,
    borderColor: "#FFFFFF",
    alignItems: "center",
    //padding: 5,
    width: 35,
    height: 35,
  }
});
