import React, { useState } from "react";
import { Modal } from "react-native";

import {
  ContainerCard,
  CardTitulo,
  ContainerIcon,
  Container,
  CardTexto,
  ContainerTextos,
  Icon,
  BorderIcon,
  ContainerItensPendencias,
  ButtonTexto,
  ButtonPendencias,
  Image,
} from "./styles";

import ModalDetalhes from "../../components/ModalDetalhes";

export default function Dados({ data, valor }) {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tipoModal, setTipoModal] = useState("");

  function abrirModalDocumentos() {
    setModalVisivel(true);
    setTipoModal("documentos");
  }
  function abrirModalFinanceiro() {
    setModalVisivel(true);
    setTipoModal("financeiro");
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
                  <Image source={require("../../../assets/dollar.png")} />
                </Icon>
              </BorderIcon>
              <CardTitulo>**Pendência Financeira</CardTitulo>
            </ContainerIcon>

            <ContainerTextos>
              <CardTexto>
                {data.financeiro == "ok" || data.financeiro == undefined ? (
                  "Sem Pendências"
                ) : (
                  <ContainerItensPendencias>
                    <ButtonPendencias onPress={abrirModalFinanceiro}>
                      <ButtonTexto>Ver pendência</ButtonTexto>
                    </ButtonPendencias>
                  </ContainerItensPendencias>
                )}
              </CardTexto>
            </ContainerTextos>
          </ContainerCard>

          <ContainerCard>
            <ContainerIcon>
              <BorderIcon>
                <Icon>
                  <Image source={require("../../../assets/paper.png")} />
                </Icon>
              </BorderIcon>
              <CardTitulo>**Pendência Documentos</CardTitulo>
            </ContainerIcon>
            <ContainerTextos>
              <CardTexto>
                {data.documentos == "ok" || data.documentos == undefined ? (
                  "Sem Pendências"
                ) : (
                  <ContainerItensPendencias>
                    <ButtonPendencias onPress={abrirModalDocumentos}>
                      <ButtonTexto>Ver pendência</ButtonTexto>
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
            <ModalDetalhes fechar={fecharModal} data={data} tipo={tipoModal} />
          </Modal>
        </Container>
      ) : null}
    </>
  );
}
