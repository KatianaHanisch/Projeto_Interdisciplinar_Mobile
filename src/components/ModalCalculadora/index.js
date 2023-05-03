import { useState, useEffect } from "react";
import { StatusBar } from "react-native";

import {
  Container,
  ModalConteudo,
  BorderTopModal,
  ContainerImage,
  Image,
  Linha,
  TextoTitulo,
  TextoSubtitulo,
  Button,
  ButtonTexto,
} from "./styles";

export default function ModalCalculadora({ fechar, data }) {
  const [textoInicial, setTextoInicial] = useState("");
  const [image, setImage] = useState(null);

  const images = {
    primeiraImagem: {
      uri: require("../../../assets/image.png"),
    },
    segundaImagem: {
      uri: require("../../../assets/image2.png"),
    },
    terceiraImagem: {
      uri: require("../../../assets/image3.png"),
    },
  };

  function mensagem() {
    if (data >= 7) {
      setTextoInicial("Parabéns você foi aprovado!!");
      setImage(images.primeiraImagem.uri);
    } else if (data < 7 && data > 4) {
      setTextoInicial("Você ficou de exame");
      setImage(images.segundaImagem.uri);
    } else {
      setTextoInicial("Infelizmente você reprovou");
      setImage(images.terceiraImagem.uri);
    }
  }

  useEffect(() => {
    mensagem();
  }, []);

  // let textoInicial = "Parabéns você foi aprovado!!";

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
        <TextoSubtitulo>Sua nota média foi {data.toFixed(1)}</TextoSubtitulo>
        <Button onPress={fechar}>
          <ButtonTexto>Fechar</ButtonTexto>
        </Button>
      </ModalConteudo>
    </Container>
  );
}
