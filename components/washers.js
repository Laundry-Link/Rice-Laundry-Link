import React from 'react';
import { View, StyleSheet, Alert, Button, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import StartButton from './button'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Washer() {
    return (
      <View style={styles.container}>
        <DataTable>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 1 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 2 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 3 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 4 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 5 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
                <StartButton/>
            </DataTable.Cell>
          </DataTable.Row>
  
          <DataTable.Row>
            <DataTable.Cell>
            <MaterialCommunityIcons name="washing-machine" size={30} color="black" />
            <Text style={styles.title}>
                Washer 6 
            </Text>
            
            </DataTable.Cell>
            <DataTable.Cell style = {styles.start}>
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
    title: {
        fontSize: 25
    },
    start: {
        justifyContent: 'flex-end'
    },
  });