import React from "react";

import {
  ContainerCard,
  CardTitulo,
  ContainerIcon,
  CardTexto,
  Container,
  ContainerItens,
  ContainerHeadCard,
} from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Dados({ data, valor }) {
  return (
    <>
      {data.ra == valor ? (
        <Container>
          <ContainerHeadCard>
            <ContainerCard>
              <ContainerIcon>
                <FontAwesome name="money" color={"grey"} size={40} />
              </ContainerIcon>
              <ContainerItens>
                <CardTitulo>Pendência Financeira</CardTitulo>
                <CardTexto>
                  {data.financeiro == "ok" ? "Sem Pendências" : data.financeiro}
                </CardTexto>
              </ContainerItens>
            </ContainerCard>

            <ContainerCard>
              <ContainerIcon>
                <FontAwesome name="file" color={"grey"} size={35} />
              </ContainerIcon>
              <CardTitulo>Pendências de documentos</CardTitulo>
              <CardTexto>
                {data.documentos == "ok" ? "Sem Pendências" : data.documentos}
              </CardTexto>
            </ContainerCard>
          </ContainerHeadCard>
        </Container>
      ) : null}
    </>
  );
}
