import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-native";

import { AuthContext } from "../../context/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  ContainerHeadUsuario,
  InformacoesUsuario,
  ContainerPerfilUsuario,
  TextoUsuarios,
  SubmitButton,
  SubmitText,
} from "./styles";

export default function PerfilUsuario() {
  const { signOut } = useContext(AuthContext);

  const [raUsuario, setRaUsuario] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [sobrenomeUsuario, setSobrenomeUsuario] = useState("");

  async function dadosUsuario() {
    const raUsuario = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");
    const sobrenome = await AsyncStorage.getItem("@sobrenome");

    setRaUsuario(JSON.parse(raUsuario));
    setNomeUsuario(JSON.parse(nome));
    setSobrenomeUsuario(JSON.parse(sobrenome));
  }

  useEffect(() => {
    dadosUsuario();
  }, []);

  return (
    <Container>
      <ContainerHeadUsuario></ContainerHeadUsuario>
      <InformacoesUsuario>
        <ContainerPerfilUsuario>
          <Ionicons name="person-circle-outline" size={50} color={"#666666"} />
          <TextoUsuarios>{nomeUsuario + " " + sobrenomeUsuario}</TextoUsuarios>
          <SubmitButton onPress={() => signOut()}>
            <SubmitText>Sair</SubmitText>
          </SubmitButton>
        </ContainerPerfilUsuario>
        {/* <Button title="Sair da conta" onPress={() => signOut()} /> */}
      </InformacoesUsuario>
    </Container>
  );
}
