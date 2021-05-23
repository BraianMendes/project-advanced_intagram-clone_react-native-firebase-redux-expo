import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Landing } from "./components/auth/Landing";

// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Landing/>
    </NavigationContainer>
  );
}
