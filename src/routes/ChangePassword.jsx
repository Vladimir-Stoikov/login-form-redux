import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'
import Title from '../components/Title';
import Errors from '../components/Errors';
import { updateData } from '../store/reducers/dataSlice';
import styled from 'styled-components';

const ChangePasswordForm = styled.form`
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

const BackArrow = styled.div`
  color: #ff88a2;
  position: absolute;
  top: 35px;
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
export default function ChangePassword() {

  const data = useSelector(state => state.base.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [visibility, setVisibility] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([])

  const passwordCheck = new RegExp('^(?=.*[0-9])(?=.*[a-z]).{8,32}$');

  function changeVisibility(e) {
    e.preventDefault();
    setVisibility(prev => !prev);
  }

  function changeData() {
    const newData = JSON.parse(JSON.stringify(data));;
 
    newData.map(user => {
      if(user.emailDb === state) {
        console.log('change');
        user.passwordDb = password;
      }
    });

    dispatch(updateData(newData));
    navigate('/Successful');
  }

  function checkPassword(e) {
    e.preventDefault();

    let isSatisfied = true;
    setError([]);
    let [ oldUser ] = data.filter(user => user.emailDb === state);
   
    if(!passwordCheck.test(password) || !passwordCheck.test(confirmPassword)) {
      setError(prev => [...prev, 'Wrong password']);
      isSatisfied = false;
    };
    if(password !== confirmPassword) {
      setError(prev => [...prev, 'Passwords don\'t match']);
      isSatisfied = false;
    };
    if(password === oldUser.passwordDb) {
      setError(prev => [...prev, 'Your new password must be different from your previous password']);
      isSatisfied = false;
    };
    if(isSatisfied) changeData();
  }

  return (
    <ChangePasswordForm>
      <Link to='/Login'>
        <BackArrow>
          <ArrowBackIosNewIcon />
        </BackArrow>
      </Link> 
      <Title title='Create new Password' fontSize='1.8rem'/>
      <Input value={password} setValue={setPassword} label='Password' id='1' type={visibility ? 'password' : 'text'}/>
      <PasswordSection>
      <Input value={confirmPassword} setValue={setConfirmPassword} label='Confirm Password' id='2' type={visibility ? 'password' : 'text'}/>
      <ButtonVisibility onClick={changeVisibility}>
          <VisibilityIcon style={{display: visibility ? 'block' : 'none'}}/>
          <VisibilityOffIcon style={{display: visibility ? 'none' : 'block'}}/>
      </ButtonVisibility>
      </PasswordSection>
      <Help margin="0 0 15px 0" name='Write new password and confirm' hoverOff={true}/>
      {error.length === 0 ? null : <Errors errors={error}/>}
      <Button name='Accept' func={checkPassword} type='submit'/>
    </ChangePasswordForm>
  )
}
