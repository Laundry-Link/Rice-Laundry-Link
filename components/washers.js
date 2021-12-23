import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import StartButton from "./button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Washer() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DataTable>
          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 1</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 2</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 3</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 4</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 5</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="washing-machine"
                size={30}
                color="black"
              />
              <Text style={styles.title}>{' '}Washer 6</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  startText: {
    color: "#FFFFFF",
  },
  start: {
    justifyContent: "flex-end",

  },
  wholebutton: {
    alignItems: 'center',
  },
  table: {
    marginBottom: 15,
    justifyContent: 'space-between'
  },
});
