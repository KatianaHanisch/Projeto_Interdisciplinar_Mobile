import React from "react";

import {
  ContainerCard,
  CardTitulo,
  ContainerIcon,
  CardTexto,
  Container,
  ContainerTextos,
} from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Dados({ data, valor }) {
  return (
    <>
      {data.ra == valor ? (
        <Container>
          <ContainerCard>
            <ContainerIcon>
              <FontAwesome name="money" color={"grey"} size={40} />
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
              <FontAwesome name="file" color={"grey"} size={35} />
            </ContainerIcon>
            <ContainerTextos>
              <CardTitulo>Pendências de documentos</CardTitulo>
              <CardTexto>
                {data.documentos == "ok" ? "Sem Pendências" : data.documentos}
              </CardTexto>
            </ContainerTextos>
          </ContainerCard>
        </Container>
      ) : null}
    </>
  );
}
