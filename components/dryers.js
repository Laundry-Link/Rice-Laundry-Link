import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  Button,
  Text,
  ScrollView,
} from "react-native";
import { DataTable } from "react-native-paper";
import StartButton from "./button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Washer() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <DataTable>
          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 1</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 2</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 3</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 4</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 5</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 6</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 7</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 8</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 9</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 10</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 11</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row style={styles.table}>
            <DataTable.Cell>
              <MaterialCommunityIcons
                name="tumble-dryer"
                size={30}
                color="black"
              />
              <Text style={styles.title}>Dryer 12</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.start}>
              <StartButton />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </View>
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
  start: {
    justifyContent: "flex-end",
  },
  table: {
    marginBottom: 15,
  },
});
