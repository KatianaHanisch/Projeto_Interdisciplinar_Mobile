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
  height: 110px;
  justify-content: flex-start;
  margin-bottom: -20px;
  align-items: center;
`;
export const Texto = styled.Text`
  margin-top: 20px;
  font-size: 25px;
  color: #fff;
`;
export const ContainerQRCode = styled.View`
  background-color: #dee2e6;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 50px ;
  min-height: 295px;
  display: flex;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 45px;
  border-radius: 5px;
  background-color: #2a2829;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;