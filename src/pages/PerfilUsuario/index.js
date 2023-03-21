import React, { useContext } from "react";
import { Button } from "react-native";

import { AuthContext } from "../../context/auth";

import { Container, ContainerHeadUsuario, InformacoesUsuario } from "./styles";

export default function PerfilUsuario() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <ContainerHeadUsuario></ContainerHeadUsuario>
      <InformacoesUsuario>
        <Button title="Sair da conta" onPress={() => signOut()} />
      </InformacoesUsuario>
    </Container>
  );
}
