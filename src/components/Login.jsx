import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import Button from './Button'
import Help from './Help'


const LoginForm = styled.form`
  position: relative;
  margin: 40% 50% 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #eee, #fff);
  width: 320px;
  height: 320px;
  border-radius: 30px;
  h1 {
    font-family: inherit;
    margin-bottom: 30px;
  }
`

export default function Login() {
  return (
    <LoginForm>
      <h1>Login</h1>
      <Input label='Username'/>
      <Input label='Password'/>
      <Help name='Forgot password?'/>
      <Button name='Sign in'/>
    </LoginForm>
  )
}
