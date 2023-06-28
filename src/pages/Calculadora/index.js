import React, { useState, useEffect } from "react";
import { Keyboard, Modal } from "react-native";

import {
  ContainerCalculadoraHead,
  AreaInput,
  Input,
  Texto,
  Container,
  ContainerInputs,
  ContainerIconeCalculdadora,
  Button,
  ButtonTexto,
  Inputs,
  MensagemErro,
  ContainerErro,
  TextoCalculo,
} from "./styles";

import ModalCalculadora from "../../components/ModalCalculadora";
import BalaoDeFala from "../../components/BalaoDeFala";

export default function Calculadora() {
  const [notaN1, setNotaN1] = useState("");
  const [notaN2, setNotaN2] = useState("");
  const [notaN3, setNotaN3] = useState("");
  const [media, setMedia] = useState(0);
  const [erro, setErro] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tecladoVisivel, setTecladoVisivel] = useState(false);
  const [open, setOpen] = useState(false);

  function limpaErro() {
    setErro("");
  }

  function fecharModal() {
    setModalVisivel(false);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setTecladoVisivel(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setTecladoVisivel(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (!erro) {
      setOpen(false);
      return;
    }
    setOpen(true);

    const timer = setTimeout(() => {
      setOpen(false);
      limpaErro();
    }, 4000);
    return () => clearTimeout(timer);
  }, [erro]);

  function calcularMedia() {
    if (notaN1 == "" || notaN2 == "" || notaN3 == "") return;
    Keyboard.dismiss();

    setMedia(
      (parseFloat(notaN1) + parseFloat(notaN2) + parseFloat(notaN3)) / 3
    );

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
    setModalVisivel(true);
  }
  console.log(media);

  return (
    <Container>
      <ContainerCalculadoraHead>
        {tecladoVisivel ? null : <Texto>Calculadora</Texto>}
      </ContainerCalculadoraHead>
      <ContainerInputs>
        <ContainerIconeCalculdadora>
          <TextoCalculo>Calcule sua média</TextoCalculo>
        </ContainerIconeCalculdadora>
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
          {open && (
            <ContainerErro>
              <MensagemErro>{erro}</MensagemErro>
            </ContainerErro>
          )}

          <Button onPress={() => calcularMedia()}>
            <ButtonTexto>Calcular</ButtonTexto>
          </Button>
        </Inputs>
      </ContainerInputs>
      <Modal visible={modalVisivel} transparent={true} animationType="slide">
        <ModalCalculadora fechar={fecharModal} data={media} />
      </Modal>
      {tecladoVisivel ? null : (
        <BalaoDeFala message="O cálculo de sua média é feito somando suas três notas e dividindo o resultado por três." />
      )}
    </Container>
  );
}
