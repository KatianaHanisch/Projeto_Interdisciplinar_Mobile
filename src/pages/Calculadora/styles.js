import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerCalculadoraHead = styled.View`
  background-color: #000000;
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
export const ContainerInputs = styled.View`
  background-color: #dee2e6;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const Inputs = styled.View`
  background-color: #ffff;
  width: 100%;
  align-items: center;
  padding: 20px 0;
  border-radius: 20px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: #c6c6c6c5;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 45px;
  border-radius: 5px;
  background-color: #373b44;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const ContainerMedia = styled.View`
  height: 100%;
  width: 100%;
  background-color: #dee2e6;
  align-items: center;
`;
export const TextoMedia = styled.Text`
  margin-top: 20px;
  font-size: 23px;
  color: #373b44;
`;

export const Media = styled.View`
  background-color: #ffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  width: 90%;
  align-items: center;
`;
