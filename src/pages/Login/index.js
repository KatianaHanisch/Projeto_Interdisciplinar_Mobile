import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";

import { AuthContext } from "../../context/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (ra === "" || password === "") return;

    signIn(ra, password);
  }

  return (
    <Background>
      <Container>
        <Logo source={require("../../../assets/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Digite seu R.A"
            value={ra}
            onChangeText={(value) => setRa(value)}
            keyboardType="numeric"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
