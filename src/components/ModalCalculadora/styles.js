import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.68);
  flex: 1;
  justify-content: flex-end;
`;
export const ModalConteudo = styled.View`
  height: 80%;
  width: 100%;
  background-color: #eae6e5;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  align-items: center;
  padding-top: 20px;
`;
export const BorderTopModal = styled.View`
  width: 20%;
  height: 4px;
  background-color: #a5a5a5;
  border-radius: 20px;
`;
export const ContainerImage = styled.View`
  width: 300px;
  height: 170px;
  background-color: #ffff;
  padding: 10px;
  margin: 20px 0;
  border-radius: 20px;
`;
export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
export const Linha = styled.View`
  width: 90%;
  height: 1px;
  background-color: #bfc0c0;
  margin: 20px;
`;
export const TextoTitulo = styled.Text`
  font-size: 22px;
  color: #495057;
`;
export const TextoSubtitulo = styled.Text`
  font-size: 20px;
  color: #595959;
`;
export const Button = styled.TouchableOpacity`
  width: 58%;
  padding: 8px;
  border-radius: 5px;
  background-color: #253342;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ButtonTexto = styled.Text`
  font-size: 18px;
  color: #fff;
`;
