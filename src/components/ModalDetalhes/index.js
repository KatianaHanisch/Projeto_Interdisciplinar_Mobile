import React from "react";
import { StatusBar } from "react-native";

import {
  Container,
  ModalTitulo,
  ContainerModal,
  ButtonPendencias,
  ButtonTexto,
  ModalConteudo,
  ModalTexto,
  Icon,
  BorderIcon,
} from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ModalDetalhes({ fechar, data, tipo }) {
  return (
    <Container>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <ContainerModal>
        <BorderIcon>
          <Icon>
            <FontAwesome
              name={tipo == "documentos" ? "file" : "money"}
              color={"grey"}
              size={35}
            />
          </Icon>
        </BorderIcon>
        <ModalConteudo>
          {/* <ModalTitulo>Detalhe das Pendências</ModalTitulo> */}
          <ModalTexto>
            {tipo == "documentos" ? data.documentos : data.financeiro}
          </ModalTexto>
          <ButtonPendencias onPress={fechar}>
            <ButtonTexto>Voltar</ButtonTexto>
          </ButtonPendencias>
        </ModalConteudo>
      </ContainerModal>
    </Container>
  );
}
