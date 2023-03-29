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
  ModalInformacoes,
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
          <ModalTitulo>Detalhe da Pendência:</ModalTitulo>
          <ModalTexto>
            {tipo == "documentos" ? data.documentos : data.financeiro}
          </ModalTexto>
          <ModalInformacoes>
            Para revolver suas pendências, compareça a secretária acadêmica.
          </ModalInformacoes>
          <ButtonPendencias onPress={fechar}>
            <ButtonTexto>Voltar</ButtonTexto>
          </ButtonPendencias>
        </ModalConteudo>
      </ContainerModal>
    </Container>
  );
}
