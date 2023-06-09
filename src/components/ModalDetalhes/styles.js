import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.68);
`;

export const ContainerModal = styled.View`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ModalConteudo = styled.View`
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  align-items: center;
  padding-top: 10px;
`;
export const BorderTopModal = styled.View`
  background-color: #a5a5a5;
  width: 20%;
  height: 4px;
  border-radius: 20px;
`;
export const ModalTexto = styled.Text`
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 24px;
  padding: 0 20px;

  color: #495057;
  font-weight: 600;
`;
export const BorderInformacoes = styled.View`
  width: 95%;
  height: 1px;
  background-color: #7f7f7f;
  margin-bottom: 15px;
`;
export const ModalInformacoes = styled.Text`
  font-size: 16px;
  color: #736f72;
  text-align: center;
  margin: 0 10px;
`;
export const ButtonPendencias = styled.TouchableOpacity`
  width: 58%;
  padding: 8px;
  border-radius: 5px;
  background-color: #253342;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
