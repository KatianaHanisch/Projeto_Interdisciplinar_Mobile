import React, { useState, useEffect, useContext } from "react";
import { FlatList, Button } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/auth";

import { Container } from "./styles";

import api from "../../services/api";
import Card from "../../components/Card";

export default function Home() {
  const { signOut } = useContext(AuthContext);
  const [dados, setDados] = useState("");
  const [userRa, setUserRa] = useState("");

  async function getRa() {
    const value = await AsyncStorage.getItem("ra");
    setUserRa(JSON.parse(value));
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
      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card data={item} valor={userRa} />}
      />
      <Button title="Sair da conta" onPress={() => signOut()} />
    </Container>
  );
}
