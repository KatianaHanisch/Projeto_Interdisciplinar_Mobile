import React, { useState } from "react";
import { Modal } from "react-native";

import {
  ContainerCard,
  CardTitulo,
  ContainerIcon,
  CardTexto,
  Container,
  ContainerTextos,
  Icon,
  BorderIcon,
  ContainerItensPendencias,
  ButtonTexto,
  ButtonPendencias,
} from "./styles";

import ModalDetalhes from "../../components/ModalDetalhes";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Dados({ data, valor }) {
  const [modalVisivel, setModalVisivel] = useState(false);

  function abrirModal() {
    setModalVisivel(true);
  }

  function fecharModal() {
    setModalVisivel(false);
  }

  return (
    <>
      {data.ra == valor ? (
        <Container>
          <ContainerCard>
            <ContainerIcon>
              <BorderIcon>
                <Icon>
                  <FontAwesome name="money" color={"grey"} size={40} />
                </Icon>
              </BorderIcon>
            </ContainerIcon>
            <ContainerTextos>
              <CardTitulo>Pendência Financeira</CardTitulo>
              <CardTexto>
                {data.financeiro == "ok" ? "Sem Pendências" : data.financeiro}
              </CardTexto>
            </ContainerTextos>
          </ContainerCard>

          <ContainerCard>
            <ContainerIcon>
              <BorderIcon>
                <Icon>
                  <FontAwesome name="file" color={"grey"} size={35} />
                </Icon>
              </BorderIcon>
            </ContainerIcon>
            <ContainerTextos>
              <CardTitulo>Pendência Documentos</CardTitulo>
              <CardTexto>
                {data.documentos == "ok" ? (
                  "Sem Pendências"
                ) : (
                  <ContainerItensPendencias>
                    <CardTexto>Possui pendências</CardTexto>
                    <ButtonPendencias onPress={abrirModal}>
                      <ButtonTexto>Ver pendências</ButtonTexto>
                    </ButtonPendencias>
                  </ContainerItensPendencias>
                )}
              </CardTexto>
            </ContainerTextos>
          </ContainerCard>
          <Modal
            visible={modalVisivel}
            transparent={true}
            animationType="slide"
          >
            <ModalDetalhes fechar={fecharModal} data={data} />
          </Modal>
        </Container>
      ) : null}
    </>
  );
}
