import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #dee2e6;
`;

export const TextoCalculo = styled.Text`
  margin-top: 45px;
  font-size: 25px;
  /* color: #595959; */
`;

export const ContainerCalculadoraHead = styled.View`
  background-color: #2a6041;
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  margin-bottom: -25px;
  align-items: center;
`;
export const Texto = styled.Text`
  margin-top: 45px;
  font-size: 25px;
  color: #fff;
`;
export const ContainerIconeCalculdadora = styled.View`
  height: 100px;
  width: 100%;
  /* background-color: #3d405b; */
  margin-top: 25px;
  align-items: center;
  background-color: #45444e;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* border-radius: 25px; */
  margin-bottom: 10px;
`;
export const BoderIcon = styled.View`
  /* background-color: red; */
  border: 2px solid red;
  border-radius: 100px;
`;
export const Icon = styled.View`
  border: 2px solid #fff;
  border-radius: 100px;
`;
export const Image = styled.Image`
  width: 50%;
  height: 100px;
  /* border-top-right-radius: 20px; */
  border-top-left-radius: 20px;
`;
export const ContainerInputs = styled.View`
  background-color: #dee2e6;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  /* margin-top: -20px; */
`;
export const Inputs = styled.View`
  background-color: #ffff;
  width: 100%;
  align-items: center;
  padding: 40px 0;
  margin-top: -20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: #eae6e5;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #595959;
  margin-bottom: 15px;
`;

export const ContainerErro = styled.View`
  background-color: #9e2a2b;
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
  background-color: #253342;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
