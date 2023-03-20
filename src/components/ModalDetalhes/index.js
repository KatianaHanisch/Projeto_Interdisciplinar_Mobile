import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import {
  Container,
  ModalTitulo,
  ContainerModal,
  ButtonPendencias,
  ButtonTexto,
  ModalConteudo,
  ModalTexto,
} from "./styles";

export default function ModalDetalhes({ fechar, data, tipo }) {
  return (
    <Container>
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor=" rgba(0, 0, 0, 0.6)"
      />
      <ContainerModal>
        <ModalConteudo>
          <ModalTitulo>Detalhe das Pendências:</ModalTitulo>
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
