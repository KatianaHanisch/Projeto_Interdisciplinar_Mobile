import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #dee2e6;
`;
export const ContainerQRCodeHead = styled.View`
  background-color: #2a6041;
  width: 100%;
  height: 125px;
  justify-content: flex-start;
  margin-bottom: -30px;
  align-items: center;
`;
export const TextoTitulo = styled.Text`
  margin-top: 20px;
  font-size: 25px;
  color: #ffffff;
`;
export const Texto = styled.Text`
  margin-top: 20px;
  font-size: 25px;
  color: #2a2829;
`;
export const ContainerQRCode = styled.View`
  background-color: #dee2e6;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 60px;
  min-height: 295px;
  display: flex;
  justify-content: center;
`;

export const BackgroundQrCode = styled.View`
  background-color: #ffffff;
  padding: 25px;
  width: 85%;
  align-items: center;
  border-radius: 10px;
  min-height: 295px;
  display: flex;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity`
  width: 55%;
  height: 45px;
  border-radius: 5px;
  background-color: #2a2829;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;

