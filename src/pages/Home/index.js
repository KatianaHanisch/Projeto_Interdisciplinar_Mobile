import React, { useState, useEffect, useContext } from "react";
import {
  FlatList,
  StatusBar,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ContainerUsuario,
  TextoUsuario,
  NomeUsuario,
  ContainerLista,
} from "./styles";

import api from "../../services/api";
import Card from "../../components/Card";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [userRa, setUserRa] = useState("");
  const [userNome, setUserNome] = useState("");
  const [userSobrenome, setUserSobrenome] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  async function getRa() {
    const value = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");
    const sobrenome = await AsyncStorage.getItem("@sobrenome");
    setUserRa(JSON.parse(value));
    setUserNome(JSON.parse(nome));
    setUserSobrenome(JSON.parse(sobrenome));
  }

  async function getDados() {
    const { data } = await api.get("/dados");
    setDados(data);
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDados();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getDados();
    getRa();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ContainerUsuario>
          <TextoUsuario>Olá</TextoUsuario>
          <NomeUsuario>{userNome + " " + userSobrenome}</NomeUsuario>
        </ContainerUsuario>
        <ContainerLista>
          {dados.map((item) => (
            <Card key={item.id} data={item} valor={userRa} />
          ))}
        </ContainerLista>
      </ScrollView>
      <StatusBar backgroundColor="#2a6041" barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#dee2e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
