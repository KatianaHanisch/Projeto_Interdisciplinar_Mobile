import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";

import {
  Stack,
  Alert,
  IconButton,
  HStack,
  VStack,
  CloseIcon,
  Text,
  Center,
  NativeBaseProvider,
  Box,
} from "native-base";

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
  const { signIn, loadingAuth, erroLogin } = useContext(AuthContext);

  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(true);

  function handleLogin() {
    if (ra === "" || password === "") return;

    signIn(ra, password);
  }

  console.log(erroLogin);

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
        <NativeBaseProvider>
          <Box w="100%" alignItems="center" mx="auto">
            <Alert w="100%" status="error">
              <VStack space={2} flexShrink={2} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                      Usuário ou senha incorreta
                    </Text>
                  </HStack>
                  <IconButton
                    variant="unstyled"
                    _focus={{
                      borderWidth: 0,
                    }}
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "coolGray.600",
                    }}
                  />
                </HStack>
              </VStack>
            </Alert>
          </Box>
        </NativeBaseProvider>
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
