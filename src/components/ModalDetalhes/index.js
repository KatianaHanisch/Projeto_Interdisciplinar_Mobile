import React from "react";
import { StatusBar, ScrollView } from "react-native";

import {
  Container,
  BorderTopModal,
  ContainerModal,
  ButtonPendencias,
  ButtonTexto,
  ModalConteudo,
  ModalTexto,
  ModalInformacoes,
  BorderInformacoes,
} from "./styles";

export default function ModalDetalhes({ fechar, data, tipo }) {
  return (
    <Container>
      <StatusBar
        animated={true}
        barStyle={"light-content"}
        translucent={true}
        backgroundColor=" rgba(0, 0, 0, 0.9)"
      />
      <ContainerModal>
        <ModalConteudo>
          <BorderTopModal />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ModalTexto>
              {tipo == "documentos" ? data.documentos : data.financeiro}
            </ModalTexto>
          </ScrollView>
          <BorderInformacoes />
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
