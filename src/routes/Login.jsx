import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'


const LoginForm = styled.form`
  position: relative;
  margin: 45vh auto;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #eee, #fff);
  width: 320px;
  height: 320px;
  border-radius: 30px;
  h1 {
    color: #ff88a2;
    font-family: inherit;
    margin-bottom: 30px;
  }
`

const BackArrow = styled.div`
  color: #ff88a2;
  position: absolute;
  top: 10%;
  left: 8%;
  &:hover{
    color: #fa6082;
  }
`

const AdviceSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 0 10px 0;
  a {
    text-decoration: none;
  }
`

const ButtonVisibility = styled.button`
  position: absolute;
  top: 51%;
  right: 12%;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #777;
  &:hover {
    color: #999;
  }
  &:active {
    transform: scale(0.98);
  }
`

export default function Login() {

  const [visibility, setVisibility] = useState(true);

  function changeVisibility(e) {
    e.preventDefault();
    setVisibility(prev => !prev);
  }


  return (
    <LoginForm>
      <Link to='/'><BackArrow><ArrowBackIosNewIcon /></BackArrow></Link> 
      <h1>Login</h1>
      <Input label='Username' id='1' type="text"/>
      <Input label='Password' id='2' type={visibility ? 'password' : 'text'}/>
      <ButtonVisibility onClick={changeVisibility}>
          <VisibilityIcon style={{display: visibility ? 'block' : 'none'}}/>
          <VisibilityOffIcon style={{display: visibility ? 'none' : 'block'}}/>
        </ButtonVisibility>
      <AdviceSection>
        <Link to='/Recover'><Help margin="0" name='Forgot password?'/></Link>
      </AdviceSection>
      <Button name='Sign in'/>
    </LoginForm>
  )
}
