import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import TopBarNavigator from "./Navigators/TopBarNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/header";

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <TopBarNavigator />
    </SafeAreaProvider>
  );
}
