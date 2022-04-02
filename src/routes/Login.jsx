import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'
import Title from '../components/Title';
import Errors from '../components/Errors';

const LoginForm = styled.form`
  position: relative;
  margin: 45vh auto;
  padding: 15px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #eee, #fff);
  width: 320px;
  height: auto;
  border-radius: 30px;
`

const BackArrow = styled(ArrowBackIosNewIcon)`
  color: #ff88a2;
  position: absolute;
  top: 22px;
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

const PasswordSection = styled.section`
  position: relative;
`

const ButtonVisibility = styled.button`
  position: absolute;
  top: 11.5%;
  right: 3%;
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

  const data = useSelector(state => state.base.data);
  const navigate = useNavigate();

  const [visibility, setVisibility] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  function changeVisibility(e) {
    e.preventDefault();
    setVisibility(prev => !prev);
  }

  function checkUser(e) {
    e.preventDefault();
    data.forEach(user => {
      let { usernameDb, passwordDb } = user;
      if(username.toUpperCase() === usernameDb.toUpperCase() && password === passwordDb) {
   
      navigate("/Profile");
      } else {
        setError(['Wrong Username or password']);
      }
    });
  }


  return (
    <LoginForm>
      <Link to='/'>
      <BackArrow />
      </Link> 
      <Title title='Login'/>
      <Input value={username} setValue={setUsername} label='Username' id='1' type="text"/>
      <PasswordSection>
      <Input value={password} setValue={setPassword} label='Password' id='2' type={visibility ? 'password' : 'text'}/>
      <ButtonVisibility onClick={changeVisibility}>
          <VisibilityIcon style={{display: visibility ? 'block' : 'none'}}/>
          <VisibilityOffIcon style={{display: visibility ? 'none' : 'block'}}/>
      </ButtonVisibility>
      </PasswordSection>
      <AdviceSection>
        <Link to='/Recover'><Help margin="0" name='Forgot password?'/></Link>
      </AdviceSection>
      {error === null? null : <Errors errors={error}/>}
      <Button name='Sign in' func={checkUser} type='submit'/>
    </LoginForm>
  )
}
