import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import * as Progress from "react-native-progress";

import BalaoDeFala from '../../components/BalaoDeFala'

import {
  ContainerQRCodeHead,
  Container,
  Button,
  ButtonTexto,
  ContainerQRCode,
  BackgroundQrCode,
  TextoTitulo,
  BackgroundQrCodeRed,
} from "./styles";

export default function QRCodePage() {
  const [qrValue, setQrValue] = useState("NA");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  async function getRa() {
    if (timeLeft > 0) {
      return;
    }

    setLoading(true);

    const ra = await AsyncStorage.getItem("@ra");
    const nome = await AsyncStorage.getItem("@nome");

    const sobrenome = await AsyncStorage.getItem("@sobrenome");

    setQrValue("");
    const timeBetweenRequests = 10000; //tempo que dura o qrcode
    const nextRequestTime = Date.now() + timeBetweenRequests;

    setTimeout(() => {
      setQrValue(
        "R.A: " +
        JSON.parse(ra) +
        "\n" +
        "Nome: " +
        JSON.parse(nome) +
        " " +
        JSON.parse(sobrenome) +
        "\n " +
        "Data: " +
        new Date().toLocaleString()
      );
      setLoading(false);
      setTimeLeft(0);
    }, 1000);

    setTimeout(() => {
      setTimeLeft(timeBetweenRequests);
    }, 1000);

    const countdownInterval = setInterval(() => {
      const timeLeft = Math.max(nextRequestTime - Date.now(), 0);
      setTimeLeft(timeLeft);
    }, 1000);
    setTimeout(() => {
      clearInterval(countdownInterval);
      setTimeLeft(0);
      setQrValue("NA");
    }, timeBetweenRequests);
  }

  return (
    <Container>
      <ContainerQRCodeHead>
        <TextoTitulo>QR-Code</TextoTitulo>
      </ContainerQRCodeHead>
      <ContainerQRCode>
        {qrValue === "NA" ? (
          <BackgroundQrCodeRed>
            {qrValue === "" ? (
              <ActivityIndicator size={100} color="green" />
            ) : qrValue === "NA" ? (
              <Image
                source={require("../../../assets/qrcode.png")}
                style={{ width: 220, height: 220, borderColor: "red" }}
              />
            ) : (
              <QRCode size={220} value={qrValue} />
            )}
          </BackgroundQrCodeRed>
        ) : (
          <BackgroundQrCode>
            {qrValue === "" ? (
              <ActivityIndicator size={100} color="green" />
            ) : qrValue === "NA" ? (
              <Image
                source={require("../../../assets/qrcode.png")}
                style={{ width: 220, height: 220, borderColor: "red" }}
              />
            ) : (
              <QRCode size={220} value={qrValue} />
            )}
          </BackgroundQrCode>
        )}
      </ContainerQRCode>

      {timeLeft > 0 ? (
        <Progress.Bar
          progress={Math.ceil(timeLeft / 1000) / 10} //divide por 10 pois são 10 segundos de duração
          width={250}
          color={"green"}
          size={15}
          style={{ marginBottom: 52 }}
        />
      ) : (
        <Button disabled={loading} onPress={() => getRa()}>
          <ButtonTexto>Gerar QR-Code</ButtonTexto>
        </Button>
      )}
      <BalaoDeFala message='Clique no botão acima para gerar seu QR-Code!' />
    </Container>
  );
}