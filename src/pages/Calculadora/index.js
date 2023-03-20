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
  const [mensagem, setMensagem] = useState("");

  function calcularMedia() {
    let media =
      (parseFloat(notaN1) + parseFloat(notaN2) + parseFloat(notaN3)) / 3;

    Keyboard.dismiss();

    setNotaN1("");
    setNotaN2("");
    setNotaN3("");

    if (media >= 7) {
      setMensagem(
        "Sua média foi " + media.toFixed(1) + "\nParabéns você foi aprovado!!"
      );
    } else if (media >= 4 && media < 7) {
      setMensagem(
        "Sua média foi " +
          media.toFixed(1) +
          "\nVocê ficou de exame nessa matéria\n Você precisa tirar " +
          (10 - media).toFixed(1) +
          " no exame"
      );
    } else if (media < 4) {
      setMensagem(
        "Sua média foi " +
          media.toFixed(1) +
          "\nInfelizmente você reprovou nessa matéria"
      );
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
      {mensagem ? (
        <ContainerMedia>
          <Media>
            {/* <TextoMedia>Sua nota de média foi {media.toFixed(1)}</TextoMedia> */}
            <TextoMedia>{mensagem}</TextoMedia>
          </Media>
        </ContainerMedia>
      ) : (
        <ContainerMedia></ContainerMedia>
      )}
    </Container>
  );
}
