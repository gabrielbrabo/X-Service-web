import React, { useState, useContext } from 'react';
import {register } from '../../Api'
import { AuthContext, } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './style';
import {
  InputArea,
  SignInput
} from '../SignIn/style';

//import SignInput from '../../components/SignInput';

//import BarberLogo from '../../assets/barber.svg';
//import EmailIcon from '../../assets/email.svg';
//import LockIcon from '../../assets/lock.svg';
//import PersonIcon from '../../assets/person.svg';

const SignUp = () => {

  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const SignClick = async () => {

    if (name !== '' && email !== '' && password !== '' && confirmpassword !== '') {
      
      const res = await register(
        name, 
        email,
        password, 
        confirmpassword
      )

      if(res.data.token){

        login(email, password)

      }

    } else { 
      alert("Por favor, preencha os campos!")
    }
  }

  const MessageButtomclick = () => {
    navigate('/signin')
  }
  
  return (
    <Container>

      <InputArea>
        <SignInput
          placeholder="Digite seu nome"
          value={name}
          onChange={
            (e) => setName(e.target.value)
          }
        />
        <SignInput
          placeholder="Digite seu e-mail"
          value={email}
          onChange={
            (e) => setEmail(e.target.value)
          }
        />
        <SignInput
          placeholder="Digite sua senha"
          value={password}
          onChange={
            (e) => setPassword(e.target.value)
          }
          password={true}
        />
        <SignInput
          placeholder="Confirme sua senha"
          value={confirmpassword}
          onChange={
            (e) => setConfirmPassword(e.target.value)
          }
          password={true}
        />

        <CustomButton onClick={SignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onClick={MessageButtomclick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça o login!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}

export default SignUp




















