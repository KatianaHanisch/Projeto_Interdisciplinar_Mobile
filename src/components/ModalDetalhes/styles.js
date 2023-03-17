import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const ContainerModal = styled.View`
  height: 40%;
  width: 100%;
  background-color: #636363;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ModalConteudo = styled.View`
  background-color: #ffff;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  padding-top: 10px;
`;
export const ModalTitulo = styled.Text`
  color: #6c757d;
  font-size: 20px;
`;
export const ModalTexto = styled.Text`
  margin-top: 30px;
  font-size: 25px;
  color: #495057;
`;
export const ButtonPendencias = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  border-radius: 5px;
  background-color: #373b44;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
