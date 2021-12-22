import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Laundry Link</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 45,
        backgroundColor: "#00205B",
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});