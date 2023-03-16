import React from "react";
import { StatusBar } from "react-native";

import {
  Container,
  Titulo,
  ContainerModal,
  ButtonPendencias,
  ButtonTexto,
  ModalConteudo,
  ModalTexto,
  Icon,
  BorderIcon,
} from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ModalDetalhes({ fechar, data }) {
  return (
    <Container>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <ContainerModal>
        <BorderIcon>
          <Icon>
            <FontAwesome name="money" color={"grey"} size={40} />
          </Icon>
        </BorderIcon>
        <Titulo>Detalhes das Pendências</Titulo>
        <ModalConteudo>
          <ModalTexto>{data.documentos}</ModalTexto>
          <ButtonPendencias onPress={fechar}>
            <ButtonTexto>Voltar</ButtonTexto>
          </ButtonPendencias>
        </ModalConteudo>
      </ContainerModal>
    </Container>
  );
}
