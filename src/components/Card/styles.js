import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #dee2e6;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 15px;
`;
export const ContainerCard = styled.View`
  width: 90%;
  height: 220px;
  margin: 15px;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  border-bottom-right-radius: 30px;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  height: 100px;
  background-color: #465362;
  border-bottom-left-radius: 30px;
  border-radius: 5px;
`;

export const Icon = styled.View`
  padding: 12px;
  border-radius: 50px;
  background-color: #fff;
  border: 2px solid #465362;
`;

export const BorderIcon = styled.View`
  border-radius: 50px;
  border: 2px solid #ffff;
`;

export const CardTitulo = styled.Text`
  font-size: 15px;
  color: #ffffff;
`;
export const CardTexto = styled.Text`
  font-size: 22px;
  color: #616668;
  margin-bottom: 20px;
`;
export const ContainerTextos = styled.View`
  align-items: center;
`;

export const ContainerItensPendencias = styled.View`
  flex-direction: column;
`;
export const ButtonPendencias = styled.TouchableOpacity`
  width: 45%;
  height: 35px;
  border-radius: 5px;
  background-color: #465362;
  align-items: center;
  justify-content: center;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
