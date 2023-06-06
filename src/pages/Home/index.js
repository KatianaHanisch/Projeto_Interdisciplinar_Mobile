import React, { useState, useEffect } from "react";
import {
  StatusBar,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ContainerUsuario,
  TextoUsuario,
  NomeUsuario,
  ContainerLista,
  ContainerNovo,
} from "./styles";

import { Container } from "../../styles";

import api from "../../services/api";
import Card from "../../components/Card";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [usuarioRa, setUsuarioRa] = useState("");
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioSobrenome, setUsuarioSobrenome] = useState("");
  const [atualizar, setAtualizar] = React.useState(false);
  const [carregandoAplicacao, setCarregandoAplicacao] = useState(true);

  async function getRa() {
    const raUsuario = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");
    const sobrenome = await AsyncStorage.getItem("@sobrenome");
    setUsuarioRa(JSON.parse(raUsuario));
    setUsuarioNome(JSON.parse(nome));
    setUsuarioSobrenome(JSON.parse(sobrenome));
  }

  async function getDados() {
    const { data } = await api.get("/dados");
    setDados(data);
    setCarregandoAplicacao(false);
  }

  const onRefresh = React.useCallback(() => {
    setAtualizar(true);
    getDados();

    setTimeout(() => {
      setAtualizar(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getDados();
    getRa();
  }, []);

  if (carregandoAplicacao) {
    return (
      <Container>
        <ActivityIndicator color={"#2a6041"} size={55} />
      </Container>
    );
  } else {
    return (
      <ContainerNovo>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={atualizar} onRefresh={onRefresh} />
          }
        >
          <ContainerUsuario>
            <TextoUsuario>Olá,</TextoUsuario>
            <NomeUsuario>{usuarioNome + " " + usuarioSobrenome}</NomeUsuario>
          </ContainerUsuario>
          <ContainerLista>
            {dados.map((item) => (
              <Card key={item.id} data={item} valor={usuarioRa} />
            ))}
          </ContainerLista>
        </ScrollView>
        <StatusBar backgroundColor="#2a6041" barStyle="light-content" />
      </ContainerNovo>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#dee2e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
