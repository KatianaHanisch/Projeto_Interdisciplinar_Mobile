import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #dee2e6;
  flex-direction: column;
`;

export const ImageUser = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Icon = styled.View`
  background-color: #fff;
  padding: 2px;
  border-radius: 100px;
`;
export const BorderIcon = styled.View`
  border: 3px solid #e5e5e5;
  border-radius: 100px;
  margin-top: 50px;
`;

export const ContainerItem = styled.View`
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;
`;
export const ContainerCard = styled.View`
  height: 58%;
  width: 93%;
  margin-top: -90px;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
`;
export const ContainerIcon = styled.View`
  height: 80px;
  width: 100%;
  background-color: #e5e5e5;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Texto = styled.Text`
  color: #525252;
  font-size: 12px;
  padding-top: 10px;
`;

export const TextoUsuarios = styled.Text`
  font-size: 18px;
  padding-bottom: 10px;
  color: #2a2829;
`;

export const ContainerTeste = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  height: 180px;
  width: 100%;
  background-color: #2a6041;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 10px 0;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #2a2829;
  margin-left: 10px;
`;
export const ContainerFooter = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ImageFooter = styled.Image`
  width: 70px;
  height: 70px;
  opacity: 0.8;
`;
export const TextoFooter = styled.Text`
  color: #525252;
  font-size: 15px;
  text-align: center;
  margin: 5px 8px;
`;
export const Linha = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
