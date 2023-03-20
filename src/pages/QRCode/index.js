import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from 'react-native';
import QRCode from "react-native-qrcode-svg";

import {
  ContainerQRCodeHead,
  Container,
  Texto,
  Button,
  ButtonTexto,
  ContainerQRCode,
} from "./styles";

export default function QRCodePage() {
  const [qrValue, setQrValue] = useState('NA');
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

    setQrValue('');
    const timeBetweenRequests = 10000; // 10 seconds
    const nextRequestTime = Date.now() + timeBetweenRequests;

    setTimeout(() => {
      setQrValue(
        "R.A: " + JSON.parse(ra) + "\n" +
        "Nome: " + JSON.parse(nome) + " " + JSON.parse(sobrenome) + "\n " +
        "Data: " + new Date().toLocaleString()
      );
      setLoading(false);
      setTimeLeft(0);
    }, 1000);

    setTimeLeft(timeBetweenRequests);
    const countdownInterval = setInterval(() => {
      const timeLeft = Math.max(nextRequestTime - Date.now(), 0);
      setTimeLeft(timeLeft);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setTimeLeft(0);
    }, timeBetweenRequests);
  }

  return (
    <Container>
      <ContainerQRCodeHead>
        <Texto>QR-Code</Texto>
      </ContainerQRCodeHead>
      <ContainerQRCode>
        {qrValue == "" ? (
          <ActivityIndicator size={100} color="green" />
        ) : (
          <QRCode size={230} value={qrValue ? qrValue : "NA"} />
        )}
      </ContainerQRCode>

      {timeLeft > 0 ? (
        <Texto>QR-Code valido por {Math.ceil(timeLeft / 1000)}s</Texto>
      ) : (
        <Button disabled={loading} onPress={() => getRa()}>
          <ButtonTexto>Gerar QR-Code</ButtonTexto>
        </Button>
      )}

    </Container>
  );
}
