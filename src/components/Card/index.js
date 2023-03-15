import React from "react";

import {
  ContainerCard,
  CardTitulo,
  ContainerIcon,
  CardTexto,
  UsuarioNome,
  ContainerUsuario,
  TextoUsuario,
  Container,
} from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Dados({ data, valor }) {
  return (
    <>
      {data.ra == valor ? (
        <Container>
          <ContainerUsuario>
            <TextoUsuario>Olá</TextoUsuario>
            <UsuarioNome>{data.nome + " " + data.sobrenome}</UsuarioNome>
          </ContainerUsuario>
          <ContainerCard>
            <ContainerIcon>
              <FontAwesome name="money" color={"grey"} size={40} />
            </ContainerIcon>
            <CardTitulo>Pendência Financeira</CardTitulo>
            <CardTexto>
              {data.financeiro == "ok" ? "Sem Pendências" : data.financeiro}
            </CardTexto>
          </ContainerCard>
          <ContainerCard>
            <ContainerIcon>
              <FontAwesome name="file" color={"grey"} size={40} />
            </ContainerIcon>
            <CardTitulo>Pendências de documentos</CardTitulo>
            <CardTexto>
              {data.documentos == "ok" ? "Sem Pendências" : data.documentos}
            </CardTexto>
          </ContainerCard>
        </Container>
      ) : null}
    </>
  );
}
