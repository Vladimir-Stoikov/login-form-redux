import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'
import Title from '../components/Title';
import Errors from '../components/Errors';
import { addData } from '../store/reducers/dataSlice';



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

const BackArrow = styled.div`
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
  right: 2%;
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

  const usernameCheck = new RegExp('^(?=[a-zA-Z0-9]{4,16}$)');
  const passwordCheck = new RegExp('^(?=.*[0-9])(?=.*[a-z]).{8,32}$');
  const emailCheck = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
  const checkDB = useSelector(state => state.base.data);

  const [visibility, setVisibility] = useState(true);
  const [Username, setUsername] = useState('UCHI');
  const [Password, setPassword] = useState('1234567q');
  const [Email, setEmail] = useState('UCHI@email.com');
  const [errors, setErrors] = useState([]);

  function changeVisibility(e) {
    e.preventDefault();
    setVisibility(prev => !prev);
  }

  function updateDate() {
    console.log(errors);
    if(errors.length === 0) {
      console.log(errors);
      dispatch(addData(
        { 
          usernameDb: Username, 
          passwordDb: Password,
          emailDb: Email
        }
      ));
    }
  }
  

  function checkNewData(e) {
    setErrors([]);
    e.preventDefault();
    if (!usernameCheck.test(Username)) {
      setErrors(prev => {
        let checkHave = 'Wrong Username';
          return (!prev.includes(checkHave) ? [...prev, checkHave] : prev);
      });
    }
    if (!passwordCheck.test(Password)) {
      setErrors(prev => {
        let checkHave = 'Wrong Password';
          return (!prev.includes(checkHave) ? [...prev, checkHave] : prev);
        });
    }
    if (!emailCheck.test(Email)) {
      setErrors(prev => {
        let checkHave = 'Email requirements is not satisfied';
        return (!prev.includes(checkHave) ? [...prev, checkHave] : prev);
      });
    } 
    checkDB.forEach(({usernameDb, emailDb}) => {
      if(usernameDb === Username) {
        setErrors(prev => {
          let checkHave = 'This username is already in use';
          return (!prev.includes(checkHave) ? [...prev, checkHave] : prev);
        });
      }
      if(emailDb === Email) {
        setErrors(prev => {
          let checkHave = 'This email is already in use';
          return (!prev.includes(checkHave) ? [...prev, checkHave] : prev);
        });
      }
    });
    updateDate();
  }


  return (
    <SignUpForm>
      <Link to='/'><BackArrow><ArrowBackIosNewIcon /></BackArrow></Link> 
      <Title title='Sign Up'/>
      <Input value={Username} setValue={setUsername} label='Username' id='1' type="text"/>
      <PasswordSection>
      <Input value={Password} setValue={setPassword} label='Password' id='2' type={visibility ? 'password' : 'text'}/>
      <ButtonVisibility onClick={changeVisibility}>
          <VisibilityIcon style={{display: visibility ? 'block' : 'none'}}/>
          <VisibilityOffIcon style={{display: visibility ? 'none' : 'block'}}/>
      </ButtonVisibility>
      </PasswordSection>
      <Input value={Email} setValue={setEmail} label='Email' id='3' type='email'/>
      <AdviceSection>
        <Link to='/Login'><Help margin="0" name='Have an account already? Login'/></Link>
      </AdviceSection>
      {errors.length > 0 ? <Errors errors={errors}></Errors> : null}
      <Button name='Sign Up' func={checkNewData}/>
    </SignUpForm>
  )
}
