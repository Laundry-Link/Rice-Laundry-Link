import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Timer from './timer'

// export default function StartButton() {
//   return <Button title="Start" onPress={() => Alert.alert("PRESSED")} />;
// /(message = "Stop!")
// };

export default function StartButton() {
  var message = "Start!";
  //Alert.alert("Timer Started! 😘")
  return (
    <View>
        <TouchableOpacity onPress={() => <Timer />} style={styles.startBackground}>
            <Text style={styles.startText}>{message} </Text>
        </TouchableOpacity>
    </View>
  );
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
    marginTop: 6.5,
  },
  startText: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingTop: 5,
  },
});
