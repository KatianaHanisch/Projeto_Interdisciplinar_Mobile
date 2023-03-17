import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./src/context/auth";

import Routes from "./src/routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#dee2e6" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
