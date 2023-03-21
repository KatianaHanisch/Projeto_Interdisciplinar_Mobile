import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #dee2e6;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  margin-bottom: 25px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const ContainerAlert = styled.View`
  width: 90%;
  height: 45px;
  background-color: red;
  border-radius: 8px;
  margin-top: -5px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 15px;
`;

export const TextoAlerta = styled.Text`
  color: #ffff;
  font-size: 17px;
  padding: 0 5px;
`;
export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #2a2829;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
