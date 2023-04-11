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
  Icon,
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
  ContainerCard,
  ContainerHeader,
  ContainerIcon,
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
      <ContainerHeader></ContainerHeader>
      <ContainerCard>
        <ContainerIcon>
          <BorderIcon>
            <Icon>
              <ImageUser source={require("../../../assets/account.png")} />
            </Icon>
          </BorderIcon>
        </ContainerIcon>
        <ContainerItem>
          <Texto>Nome</Texto>
          <TextoUsuarios>{nomeUsuario + " " + sobrenomeUsuario}</TextoUsuarios>
          <Linha />
          <Texto>Curso</Texto>
          <TextoUsuarios>{cursoUsuario}</TextoUsuarios>
          <Linha />
          <Texto>RA</Texto>
          <TextoUsuarios>{raUsuario}</TextoUsuarios>
          <Linha />
          <SubmitButton onPress={() => signOut()}>
            <ContainerTeste>
              <Image source={require("../../../assets/logout.png")} />
              <SubmitText>Sair</SubmitText>
            </ContainerTeste>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={"#525252"}
            />
          </SubmitButton>
        </ContainerItem>
      </ContainerCard>
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
