import React from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import StartButton from './button'

export default function Dryer() {
    return (
      <View style={styles.container}>
        <DataTable>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 1</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 2</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 3</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 4</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 5</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 6</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 7</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 8</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 9</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 10</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 11</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>IMAGE</DataTable.Cell>
            <DataTable.Cell>Dryer 12</DataTable.Cell>
            <DataTable.Cell>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 15,
      paddingHorizontal: 20,
    },
  });