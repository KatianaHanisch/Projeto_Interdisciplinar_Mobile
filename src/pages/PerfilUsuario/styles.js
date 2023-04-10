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

export const ContainerIcon = styled.View`
  background-color: #fff;
  border-radius: 100px;
`;
export const BorderIcon = styled.View`
  border: 1px solid #ff0000;
  border-radius: 100px;
`;

export const ContainerItem = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #f6f6f6;
`;

export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Texto = styled.Text`
  color: #000000;
  font-size: 12px;
`;

export const TextoUsuarios = styled.Text`
  font-size: 20px;
`;

export const ContainerTeste = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
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
  color: #484848;
`;
