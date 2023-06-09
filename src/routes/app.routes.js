import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Calculadora from "../pages/Calculadora";
import QRCodePage from "../pages/QRCodePage";
import PerfilUsuario from "../pages/PerfilUsuario";

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
          height: 44,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={26} color={color} />;
            }
            return <Ionicons name="home-outline" size={26} color={color} />;
          },
        }}
      />
      <AppTab.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="calculator" size={26} color={color} />;
            }
            return (
              <Ionicons name="calculator-outline" size={26} color={color} />
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
              return <Ionicons name="qr-code" size={26} color={color} />;
            }
            return <Ionicons name="qr-code-outline" size={26} color={color} />;
          },
        }}
      />
      <AppTab.Screen
        name="PerfilUsuario"
        component={PerfilUsuario}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={26} color={color} />;
            }
            return <Ionicons name="person-outline" size={26} color={color} />;
          },
        }}
      />
    </AppTab.Navigator>
  );
}
