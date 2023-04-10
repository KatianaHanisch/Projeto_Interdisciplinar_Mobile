import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AuthContext } from "../../context/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  TextoUsuarios,
  Texto,
  ImageUser,
  ContainerIcon,
  BorderIcon,
  ContainerItem,
  Image,
  SubmitButton,
  SubmitText,
  ContainerTeste,
  ContainerFooter,
  TextoFooter,
  ImageFooter,
  Linha,
} from "./styles";

export default function PerfilUsuario() {
  const { signOut } = useContext(AuthContext);

  const [raUsuario, setRaUsuario] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [sobrenomeUsuario, setSobrenomeUsuario] = useState("");
  const [cursoUsuario, setCursoUsuario] = useState("");

  async function dadosUsuario() {
    const raUsuario = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");
    const sobrenome = await AsyncStorage.getItem("@sobrenome");
    const curso = await AsyncStorage.getItem("@curso");

    setRaUsuario(JSON.parse(raUsuario));
    setNomeUsuario(JSON.parse(nome));
    setSobrenomeUsuario(JSON.parse(sobrenome));
    setCursoUsuario(JSON.parse(curso));
  }

  useEffect(() => {
    dadosUsuario();
  }, []);

  return (
    <Container>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#04bf00", "#3bb78f", "#0bab64", "#04bf00"]}
        style={styles.containerGradiente}
      >
        <BorderIcon>
          <ContainerIcon>
            <ImageUser source={require("../../../assets/user.png")} />
          </ContainerIcon>
        </BorderIcon>
        <TextoUsuarios>{nomeUsuario + " " + sobrenomeUsuario}</TextoUsuarios>
      </LinearGradient>
      <ContainerItem>
        <Texto>Nome</Texto>
        <TextoUsuarios>{nomeUsuario + " " + sobrenomeUsuario}</TextoUsuarios>
      </ContainerItem>
      <Linha />
      <ContainerItem>
        <Texto>Curso</Texto>
        <TextoUsuarios>{cursoUsuario}</TextoUsuarios>
      </ContainerItem>
      <Linha />
      <ContainerItem>
        <Texto>RA</Texto>
        <TextoUsuarios>{raUsuario}</TextoUsuarios>
      </ContainerItem>
      <Linha />
      <ContainerItem>
        <SubmitButton onPress={() => signOut()}>
          <ContainerTeste>
            <Image source={require("../../../assets/logout.png")} />
            <SubmitText>Sair</SubmitText>
          </ContainerTeste>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color={"#666666"}
          />
        </SubmitButton>
      </ContainerItem>
      <ContainerFooter>
        <ImageFooter source={require("../../../assets/ads1.png")} />
        <TextoFooter>
          Aplicativo desenvolvido pelo curso de Análise e Desenvolvimento de
          Sistemas
        </TextoFooter>
      </ContainerFooter>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerGradiente: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
