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
} from "./styles";

import ModalDetalhes from "../../components/ModalDetalhes";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Ionicons } from "@expo/vector-icons";

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
                  {/* <FontAwesome name="money" color={"#666666"} size={40} /> */}
                  <Ionicons name="cash-outline" size={40} color={"#666666"} />
                </Icon>
              </BorderIcon>
              <CardTitulo>**Pendência Financeira</CardTitulo>
            </ContainerIcon>
            <ContainerTextos>
              <CardTexto>
                {data.financeiro == "ok" ? (
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
                  {/* <FontAwesome name="file" color={"#666666"} size={35} /> */}
                  <Ionicons
                    name="documents-outline"
                    size={35}
                    color={"#666666"}
                  />
                </Icon>
              </BorderIcon>
              <CardTitulo>**Pendência Documentos</CardTitulo>
            </ContainerIcon>
            <ContainerTextos>
              <CardTexto>
                {data.documentos == "ok" ? (
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
