import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  background-color: #63C2D1;
  justify-content: center;
  align-items: center;
`;
export const LoadingIcon = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;
export const InputArea = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
export const CustomButton = styled.button`
  height: 60px;
  margin: 20px;
  background-color: #268596;
  border-radius: 30px;
  border: none;
  justify-content: center;
  align-items: center
`;
export const CustomButtonText = styled.div`
  font-size: 20px;
  color: #fff;
`;
export const SignMessageButton = styled.button`
  flex-direction: row;
  justify-content: center;
  border: none;
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: #63C2D1;
`;
export const SignMessageButtonText = styled.text`
  font-size: 19px;
  color: #268596;
`;
export const SignMessageButtonTextBold = styled.text`
  font-size: 21px;
  color: #268596;  
  font-weight: bold;
  margin-left: 5px;
`;
export const SignInput = styled.input`
  margin: 15px;
  padding-left: 10px;
  padding-right: 10px;
  width: 350px;
  height: 40px;
  font-size: 25px;
  color: #fff;
  background-color: #83D6E3;
  border-radius: 30px;
  border-color: #000;
  border-top: none;
  border-left: none;
  border-right: none;

  &::placeholder {
    color: #268596;
  }
`;