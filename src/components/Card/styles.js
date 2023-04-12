import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #dee2e6;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 5px;
`;
export const ContainerCard = styled.View`
  width: 90%;
  height: 42%;
  /* height: 220px; */
  margin: 15px;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  border-bottom-right-radius: 30px;
`;

export const ContainerIcon = styled.View`
  width: 100%;
  /* height: 130px; */
  height: 58%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 12px;
  background-color: #45444e;
  border-bottom-left-radius: 30px;
  border-radius: 5px;
`;

export const Icon = styled.View`
  padding: 12px;
  border-radius: 50px;
  background-color: #fff;
  border: 2px solid #45444e;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
export const BorderIcon = styled.View`
  border-radius: 50px;
  border: 2px solid #ffff;
`;

export const CardTitulo = styled.Text`
  font-size: 12px;
  color: #bec3bc;
  padding-top: 3px;
`;
export const CardTexto = styled.Text`
  font-size: 23px;
  color: #666666;
  margin-bottom: 20px;
`;
export const ContainerTextos = styled.View`
  align-items: center;
`;

export const ContainerItensPendencias = styled.View`
  padding-top: 20px;
`;

export const ButtonPendencias = styled.TouchableOpacity`
  width: 38%;
  padding: 8px;
  border-radius: 5px;
  background-color: #f87575;
  align-items: center;
  justify-content: center;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
