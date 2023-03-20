import React, { useState } from "react";
import { Keyboard } from "react-native";

import {
  ContainerCalculadoraHead,
  AreaInput,
  Input,
  Texto,
  Container,
  ContainerInputs,
  Button,
  ButtonTexto,
  TextoMedia,
  ContainerMedia,
  Inputs,
  Media,
} from "./styles";

export default function Calculadora() {
  const [notaN1, setNotaN1] = useState("");
  const [notaN2, setNotaN2] = useState("");
  const [notaN3, setNotaN3] = useState("");
  const [media, setMedia] = useState(0);
  const [mensagem, setMensagem] = useState("");

  function calcularMedia() {
    setMedia(
      (parseFloat(notaN1) + parseFloat(notaN2) + parseFloat(notaN3)) / 3
    );

    Keyboard.dismiss();

    setNotaN1("");
    setNotaN2("");
    setNotaN3("");

    if (media >= 7) {
      setMensagem("Parabéns você foi aprovado!!");
    } else if (media >= 4 && media < 7) {
      setMensagem("Você ficou de exame nessa matéria");
    } else if (media < 4) {
      setMensagem("Infelizmente você reprovou nessa matéria");
    } else {
      setMensagem("Nota inválida");
    }
  }

  return (
    <Container>
      <ContainerCalculadoraHead>
        <Texto>Calculadora</Texto>
      </ContainerCalculadoraHead>
      <ContainerInputs>
        <Inputs>
          <AreaInput>
            <Input
              placeholder="Digite sua nota N1"
              value={notaN1}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={(value) => setNotaN1(value)}
            />
          </AreaInput>
          <AreaInput>
            <Input
              placeholder="Digite sua nota N2"
              value={notaN2}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={(value) => setNotaN2(value)}
            />
          </AreaInput>
          <AreaInput>
            <Input
              placeholder="Digite sua nota N3"
              value={notaN3}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(value) => setNotaN3(value)}
            />
          </AreaInput>
          <Button onPress={() => calcularMedia()}>
            <ButtonTexto>Calcular</ButtonTexto>
          </Button>
        </Inputs>
      </ContainerInputs>
      {media ? (
        <ContainerMedia>
          <Media>
            <TextoMedia>Sua nota de média foi {media.toFixed(1)}</TextoMedia>
            <TextoMedia>{mensagem}</TextoMedia>
          </Media>
        </ContainerMedia>
      ) : (
        <ContainerMedia></ContainerMedia>
      )}
    </Container>
  );
}
