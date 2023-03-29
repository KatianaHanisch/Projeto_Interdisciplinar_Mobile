import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerCalculadoraHead = styled.View`
  background-color: #2a6041;
  width: 100%;
  height: 120px;
  justify-content: flex-start;
  margin-bottom: -25px;
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
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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

export const ContainerErro = styled.View`
  background-color: #e63946;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const MensagemErro = styled.Text`
  color: #ffff;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 45px;
  border-radius: 5px;
  background-color: #2a2829;
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
  margin-top: -5px;
`;
export const TextoMedia = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: #373b44;
`;

export const Media = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: -10px;
  padding: 10px;
  height: 170px;
  width: 100%;
  align-items: center;
`;

export const IconContainer = styled.View`
  background-color: #dee2e6;
  padding: 5px;
  border-radius: 50px;
  margin-bottom: -20px;
  z-index: 9;
`;

export const IconBorder = styled.View`
  background-color: #ffffff;
  padding: 7px;
  border-radius: 50px;
`;

export const NovoContainer = styled.View`
  /* background-color: #cacaca; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  width: 95%;
  align-items: center;
  padding: 0 8px;
`;
