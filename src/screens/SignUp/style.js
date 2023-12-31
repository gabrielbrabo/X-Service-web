import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  background-color: #63C2D1;
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
  font-size: 16px;
  color: #268596;  
  font-weight: bold;
  margin-left: 5px;
`;
