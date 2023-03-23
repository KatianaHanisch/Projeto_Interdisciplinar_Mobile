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
  MensagemErro,
  ContainerErro,
  IconContainer,
  IconBorder,
  NovoContainer,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

export default function Calculadora() {
  const [notaN1, setNotaN1] = useState("");
  const [notaN2, setNotaN2] = useState("");
  const [notaN3, setNotaN3] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  function calcularMedia() {
    setMensagem("");
    if (notaN1 == "" || notaN2 == "" || notaN3 == "") return;

    let media =
      (parseFloat(notaN1) + parseFloat(notaN2) + parseFloat(notaN3)) / 3;

    Keyboard.dismiss();

    if (
      notaN1 < 0 ||
      notaN1 >= 11 ||
      notaN2 < 0 ||
      notaN2 >= 11 ||
      notaN3 < 0 ||
      notaN3 >= 11
    ) {
      setErro("Valor inválido");
      return;
    } else {
      setErro("");
    }

    setNotaN1("");
    setNotaN2("");
    setNotaN3("");

    if (media >= 7 && media <= 10) {
      setMensagem("Média: " + media.toFixed(1) + "\nSituação: Aprovado");
    } else if (media >= 4 && media < 7) {
      setMensagem(
        "Média: " +
          media.toFixed(1) +
          "\nSituação: Fazer Exame\nVocê precisa tirar " +
          (10 - media).toFixed(1) +
          " no exame"
      );
    } else if (media < 4) {
      setMensagem("Média: " + media.toFixed(1) + "\nSituação: Reprovado");
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
          {erro && (
            <ContainerErro>
              <MensagemErro>{erro}</MensagemErro>
            </ContainerErro>
          )}

          <Button onPress={() => calcularMedia()}>
            <ButtonTexto>Calcular</ButtonTexto>
          </Button>
        </Inputs>
      </ContainerInputs>
      {mensagem ? (
        <ContainerMedia>
          <NovoContainer>
            <IconContainer>
              <IconBorder>
                <Ionicons name="reader-outline" size={28} color={"#000000"} />
              </IconBorder>
            </IconContainer>
            <Media>
              <TextoMedia>{mensagem}</TextoMedia>
            </Media>
          </NovoContainer>
        </ContainerMedia>
      ) : (
        <ContainerMedia></ContainerMedia>
      )}
    </Container>
  );
}
