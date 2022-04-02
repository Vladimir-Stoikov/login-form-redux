import React, { useState } from 'react'
import { useSelector } from 'react-redux';


import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'
import Title from '../components/Title';
import Errors from '../components/Errors';



const RecoverForm = styled.form`
  position: relative;
  margin: 45vh auto;
  padding: 20px;
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
  top: 25px;
  left: 4.5%;
  &:hover{
    color: #fa6082;
  }
`




export default function Recover() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState([])

  const data = useSelector(state => state.base.data);
  const navigate = useNavigate();

  function checkEmail(e) {
    e.preventDefault();
    setError(null);
    data.forEach(user => {
      if(email.toUpperCase() === user.emailDb.toUpperCase()) {
      navigate('/ChangePassword', { state: email});
      } else {
      setError(['Wrong email']);
      }
    });
  }


  return (
    <RecoverForm>
      <Link to='/Login'>
      <BackArrow />
      </Link> 
      <Title title='Recover data'/>
      <Input value={email} setValue={setEmail} label='Email' id='1' type="email"/>
      <Help margin="0 0 15px 0" name='Enter your Email' hoverOff={true}/>
      {error.length > 0 ? <Errors errors={error} /> : null}
      <Button name='Accept' func={checkEmail}/>
    </RecoverForm>
  )
}
