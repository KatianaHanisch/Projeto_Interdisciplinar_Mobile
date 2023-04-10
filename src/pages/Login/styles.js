import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  flex: 1.1;
  width: 100%;
  background: #252525;
`;

export const ContainerItens = styled.View`
  flex-direction: column;
  flex: 3;
  width: 100%;
  align-items: center;
  background: #f0f0f0;
  margin-top: -50px;
  border-top-left-radius: 60px;
`;

export const Logo = styled.Image`
  margin-bottom: 35px;
  margin-top: 45px;
  height: 90px;
  width: 110px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fefefe;
  width: 90%;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const ContainerAlert = styled.View`
  width: 90%;
  height: 45px;
  background-color: #e63946;
  border-radius: 8px;
  margin-top: -5px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const TextoAlerta = styled.Text`
  color: #ffff;
  font-size: 15px;
  padding: 0 5px;
`;
export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #2a6041;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
