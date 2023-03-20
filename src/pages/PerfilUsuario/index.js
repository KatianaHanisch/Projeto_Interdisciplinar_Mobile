import React, { useContext } from "react";
import { Button } from "react-native";

import { AuthContext } from "../../context/auth";

import { Container } from "../../styles";

export default function PerfilUsuario() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <Button title="Sair da conta" onPress={() => signOut()} />
    </Container>
  );
}
