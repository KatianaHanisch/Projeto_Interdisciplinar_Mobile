import { useState, useEffect } from "react";
import { StatusBar } from "react-native";

import {
  Container,
  ModalConteudo,
  BorderTopModal,
  ContainerImage,
  Image,
  Linha,
  ContainerCardFooter,
  ContainerTextos,
  ContainerTeste,
  TextoTitulo,
  TextoSubtitulo,
  TextoSecundario,
  Button,
  ButtonTexto,
} from "./styles";

export default function ModalCalculadora({ fechar, data }) {
  const [textoInicial, setTextoInicial] = useState("");
  const [textoSecundario, setTextoSecundario] = useState("");
  const [notaExame, setNotaExame] = useState("");
  const [image, setImage] = useState(null);

  const images = {
    imgAprovado: {
      uri: require("../../../assets/aprovado.png"),
    },
    imgExame: {
      uri: require("../../../assets/exame.png"),
    },
    imgReprovado: {
      uri: require("../../../assets/reprovado.png"),
    },
  };

  function mensagem() {
    if (data >= 7) {
      setImage(images.imgAprovado.uri);
      setTextoInicial("Parabéns você foi aprovado!!");
      setTextoSecundario(
        "Parabéns você foi aprovado. O próximo semestre está lhe aguardando"
      );
    } else if (data < 7 && data > 4) {
      setImage(images.imgExame.uri);
      setTextoInicial("Você ficou de exame");
      setNotaExame(`Você precisa tirar ${(10 - data).toFixed(1)} no exame`);
      setTextoSecundario(
        `Suas opções são solicitar a prova substuitiva ou fazer o exame final`
      );
    } else {
      setImage(images.imgReprovado.uri);
      setTextoInicial("Infelizmente você reprovou");
      setTextoSecundario("Entre em contato com o coordenador do seu curso");
    }
  }

  useEffect(() => {
    mensagem();
  }, []);

  return (
    <Container>
      <StatusBar
        animated={true}
        barStyle={"light-content"}
        translucent={true}
        backgroundColor=" rgba(0, 0, 0, 0.6)"
      />
      <ModalConteudo>
        <BorderTopModal />
        <ContainerImage>
          <Image source={image} />
        </ContainerImage>
        <TextoTitulo>{textoInicial}</TextoTitulo>
        <Linha />
        <ContainerCardFooter>
          <ContainerTextos>
            <TextoSubtitulo>
              Sua nota média foi {data.toFixed(1)}
            </TextoSubtitulo>
            <Linha />
            {notaExame && (
              <>
                <TextoSubtitulo>{notaExame}</TextoSubtitulo>
                <Linha />
              </>
            )}

            <TextoSecundario>{textoSecundario}</TextoSecundario>
          </ContainerTextos>
          <ContainerTeste>
            <Button onPress={fechar}>
              <ButtonTexto>Fechar</ButtonTexto>
            </Button>
          </ContainerTeste>
        </ContainerCardFooter>
      </ModalConteudo>
    </Container>
  );
}
