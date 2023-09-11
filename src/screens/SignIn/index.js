import React, { useState,  useContext} from 'react'
import { AuthContext, } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignInput,
} from './style';

//import SignInput from '../../components/SignInput';

//import BarberLogo from '../../assets/barber.svg';
//import EmailIcon from '../../assets/email.svg';
//import LockIcon from '../../assets/lock.svg';


const SignIn = () => {

  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignClick = async () => {

    if (email !== '' && password !== '') {

      login(email, password)

    } else {
      alert('Preencha os campos!')
    }
    
  }

  const MessageButtomclick = () => {
    navigate('/signup')
  }

  return (
    <Container>

      <InputArea>
        
        <SignInput
          placeholder = 'Digite seu e-mail'
          value = {email}
          onChange={
            (e) => setEmail(e.target.value)
          }>

        </SignInput>
        <SignInput
          placeholder = 'Digite sua senha'
          placeholderTextColor="#fff"
          value = {password}
          onChange={
            (e) => setPassword(e.target.value)
          }>

        </SignInput>

        <CustomButton onClick={SignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onClick={MessageButtomclick}>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}

export default SignIn



















