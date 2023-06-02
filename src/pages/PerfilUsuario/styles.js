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
  border: 1px solid #7f7f7f;
  border-radius: 100px;
  margin-top: 30px;
`;

export const ContainerItem = styled.View`
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
`;
export const ContainerCard = styled.View`
  height: 60%;
  width: 93%;
  margin-top: -90px;
  align-items: center;
  flex-direction: column;
  background-color: #fcfffc;
  border-radius: 20px;
`;
export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Texto = styled.Text`
  color: #7f7f7f;
  font-size: 12px;
  padding-top: 10px;
`;

export const TextoUsuarios = styled.Text`
  font-size: 18px;
  padding-bottom: 10px;
  color: #505050;
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
  font-size: 18px;
  color: #515151;
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
  color: #736f72;
  font-size: 15px;
  text-align: center;
  margin: 5px 8px;
`;
export const Linha = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
