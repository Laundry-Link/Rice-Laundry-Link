import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function StartButton(){
    return(
        <Button
            title ="Start"
            onPress = {() => Alert.alert("PRESSED")}
        />
    )
}