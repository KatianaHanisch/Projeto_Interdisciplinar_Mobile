import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./src/context/auth";

import Routes from "./src/routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          animated={true}
          barStyle="light-content"
          translucent={true}
          backgroundColor=" rgba(0, 0, 0, 0.1)"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
