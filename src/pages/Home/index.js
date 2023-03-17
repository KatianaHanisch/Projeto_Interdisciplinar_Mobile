import React, { useState, useEffect, useContext } from "react";
import { FlatList, StatusBar } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/auth";

import {
  Container,
  ContainerUsuario,
  TextoUsuario,
  NomeUsuario,
  ContainerLista,
} from "./styles";

import api from "../../services/api";
import Card from "../../components/Card";

export default function Home() {
  const { signOut } = useContext(AuthContext);
  const [dados, setDados] = useState([]);
  const [userRa, setUserRa] = useState("");
  const [userNome, setUserNome] = useState("");
  const [userSobrenome, setUserSobrenome] = useState("");

  async function getRa() {
    const value = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");
    const sobrenome = await AsyncStorage.getItem("@sobrenome");
    setUserRa(JSON.parse(value));
    setUserNome(JSON.parse(nome));
    setUserSobrenome(JSON.parse(sobrenome));
  }

  async function getDados() {
    const response = await api.get("/dados");
    setDados(response.data);
  }

  useEffect(() => {
    getDados();
    getRa();
  }, []);

  return (
    <Container>
      <ContainerUsuario>
        <TextoUsuario>Olá</TextoUsuario>
        <NomeUsuario>{userNome + " " + userSobrenome}</NomeUsuario>
      </ContainerUsuario>
      <ContainerLista>
        <FlatList
          data={dados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Card data={item} valor={userRa} />}
        />
      </ContainerLista>
      <StatusBar backgroundColor="#2D6A4F" barStyle="dark-content" />
      {/* <Button title="Sair da conta" onPress={() => signOut()} /> */}
    </Container>
  );
}
