import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addData } from '../store/reducers/dataSlice';


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'
import Title from '../components/Title';
import Errors from '../components/Errors';

const SignUpForm = styled.form`
  padding: 15px 0;
  position: relative;
  margin: 45vh auto;
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
  cursor: pointer;
  color: #ff88a2;
  position: absolute;
  top: 22px;
  left: 8%;
   &:hover{
    color: #fa6082;
  }
`

const Info = styled(InfoIcon)`
  cursor: pointer;
  color: #ddd;
  position: absolute;
  top: 20px;
  right: 8%;
  transform: scale(1.3);
  &:hover{
    color: #ff88a2;
  }
  &:active{
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

export default function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameCheck = new RegExp('^(?=[a-zA-Z0-9]{4,16}$)');
  const passwordCheck = new RegExp('^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$');
  const emailCheck = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
  const checkDB = useSelector(state => state.base.data);

  const [visibility, setVisibility] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  function changeVisibility(e) {
    e.preventDefault();
    setVisibility(prev => !prev);
  }

  function updateDate() {
      dispatch(addData(
        { 
          usernameDb: username, 
          passwordDb: password,
          emailDb: email
        }
      ));
      navigate('/Successful', { state: 'You created new account' });
  }
  

  function checkNewData(e) {
     e.preventDefault();

    let isSatisfied = true;
    setErrors([]);
   
    if (!usernameCheck.test(username)) {
      isSatisfied = false;
      setErrors(prev => [...prev, 'Wrong Username']);
    }
    if (!passwordCheck.test(password)) {
      isSatisfied = false;
      setErrors(prev => [...prev, 'Wrong Password']);
    }
    if (!emailCheck.test(email)) {
      isSatisfied = false;
      setErrors(prev => [...prev, 'Email requirements is not satisfied']);
    } 
    checkDB.forEach(({usernameDb, emailDb}) => {
      if(usernameDb === username) {
        isSatisfied = false;
        setErrors(prev => [...prev, 'This username is already in use']);
      }
      if(emailDb === email) {
        isSatisfied = false;
        setErrors(prev => [...prev, 'This email is already in use']);
      }
    });
    if(isSatisfied) updateDate();
  }


  return (
    <SignUpForm>
      <BackArrow onClick={() => navigate('/')}/>
      <Info onClick={() => navigate('/Info', {state: '/SignUp'})} />
      <Title title='Sign Up'/>
      <Input value={username} setValue={setUsername} label='Username' id='1' type="text"/>
      <PasswordSection>
      <Input value={password} setValue={setPassword} label='Password' id='2' type={visibility ? 'password' : 'text'}/>
      <ButtonVisibility onClick={changeVisibility}>
          <VisibilityIcon style={{display: visibility ? 'block' : 'none'}}/>
          <VisibilityOffIcon style={{display: visibility ? 'none' : 'block'}}/>
      </ButtonVisibility>
      </PasswordSection>
      <Input value={email} setValue={setEmail} label='Email' id='3' type='email'/>
      <AdviceSection>
        <Link to='/Login'><Help margin="0" name='Have an account already? Login'/></Link>
      </AdviceSection>
      {errors.length > 0 ? <Errors errors={errors} /> : null}
      <Button name='Sign Up' func={checkNewData}/>
    </SignUpForm>
  )
}
