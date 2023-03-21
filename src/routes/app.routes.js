import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Calculadora from "../pages/Calculadora";
import QRCodePage from "../pages/QRCodePage";
import PerfilUsuario from "../pages/PerfilUsuario";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Ionicons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2a6041",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#f8f9fa",
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 4,
          height: 48,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={27} color={color} />;
            }
            // return <Feather name="home" color={color} size={size} />;
            return <Ionicons name="home-outline" size={27} color={color} />;
          },
        }}
      />
      <AppTab.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="calculator" size={27} color={color} />;
            }
            return (
              <Ionicons name="calculator-outline" size={27} color={color} />
            );
          },
        }}
      />
      <AppTab.Screen
        name="QRCode"
        component={QRCodePage}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="qr-code" size={27} color={color} />;
            }
            return <Ionicons name="qr-code-outline" size={27} color={color} />;
          },
        }}
      />
      <AppTab.Screen
        name="PerfilUsuario"
        component={PerfilUsuario}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={27} color={color} />;
            }
            return <Ionicons name="person-outline" size={27} color={color} />;
          },
        }}
      />
    </AppTab.Navigator>
  );
}
