import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Calculadora from "../pages/Calculadora";
import QRCode from "../pages/QRCode";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Ionicons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#081C15",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#f8f9fa",
          borderTopWidth: 0,
          // bottom: 14,
          // left: 14,
          // right: 14,
          elevation: 0,
          borderRadius: 4,
          height: 50,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={30} color={color} />;
            }
            // return <Feather name="home" color={color} size={size} />;
            return <Ionicons name="home-outline" size={30} color={color} />;
          },
        }}
      />
      <AppTab.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="calculator" size={30} color={color} />;
            }
            return (
              <Ionicons name="calculator-outline" size={30} color={color} />
            );
          },
        }}
      />
      <AppTab.Screen
        name="QRCode"
        component={QRCode}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="qr-code" size={30} color={color} />;
            }
            return <Ionicons name="qr-code-outline" size={30} color={color} />;
          },
        }}
      />
    </AppTab.Navigator>
  );
}
