import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Calculadora from "../pages/Calculadora";
import QRCode from "../pages/QRCode";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <AppTab.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="calculator" color={color} size={size} />;
          },
        }}
      />
      <AppTab.Screen
        name="QRCode"
        component={QRCode}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="qrcode" color={color} size={size} />;
          },
        }}
      />
    </AppTab.Navigator>
  );
}
