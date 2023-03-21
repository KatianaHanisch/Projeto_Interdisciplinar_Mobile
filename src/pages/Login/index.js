import React, { useState, useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { AuthContext } from "../../context/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  ContainerAlert,
  TextoAlerta,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const { signIn, loadingAuth, erroLogin, limpaErro } = useContext(AuthContext);

  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  function handleLogin() {
    if (ra === "" || password === "") return;

    signIn(ra, password);
  }

  useEffect(() => {
    if (!erroLogin) {
      setOpen(false);
      return;
    }

    setOpen(true);

    const timer = setTimeout(() => {
      setOpen(false);
      limpaErro();
    }, 4000);
    return () => clearTimeout(timer);
  }, [erroLogin]);

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

        {open && (
          <ContainerAlert>
            <Ionicons name="alert-circle-outline" size={30} color={"#ffffff"} />
            <TextoAlerta>{erroLogin}</TextoAlerta>
          </ContainerAlert>
        )}

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
