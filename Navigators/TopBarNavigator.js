import * as React from 'react'
import { Text, View, Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets} from 'react-native-safe-area-context';
import Washer from '/Users/jessickmon/Documents/GitHub/Rice-Laundry-Link/components/washers.js';
import Dryer from '/Users/jessickmon/Documents/GitHub/Rice-Laundry-Link/components/dryers.js';

function Washers() {
    return (
        <Washer/>
    )
}

function Dryers() {
    return (
        <Dryer/>
    )
}

function Chat() {
    return (
        <View>
            <Text>Chats blah blah blah</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName = 'Washers'
            tabBarOptions = {{
                activeTintColor: "black",
                labelStyle: { fontSize: 12},
                style: {backgroundColor: 'white'},
            }}
        >
            <Tab.Screen 
                name = 'Washers'
                component = {Washers}
                options = {{tabBarLabel: "Washers"}}
            />
            <Tab.Screen 
                name = 'Dryers'
                component = {Dryers}
                options = {{tabBarLabel: "Dryers"}}
            />
            <Tab.Screen 
                name = 'Chat'
                component = {Chat}
                options = {{tabBarLabel: "Chat"}}
            />
        </Tab.Navigator>
    )
}

export default function TopBarNavigator(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}