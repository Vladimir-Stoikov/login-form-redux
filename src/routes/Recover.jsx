import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Input from '../components/Input'
import Button from '../components/Button'
import Help from '../components/Help'


const RecoverForm = styled.form`
  position: relative;
  margin: 45vh auto;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #eee, #fff);
  width: 320px;
  height: 250px;
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
  top: 11.7%;
  left: 4.5%;
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

export default function Recover() {

  return (
    <RecoverForm>
      <Link to='/Login'><BackArrow><ArrowBackIosNewIcon /></BackArrow></Link> 
      <h1>Recover data</h1>
      <Input label='Email' id='1' type="email"/>
      <AdviceSection>
        <Link to='/Recover'><Help margin="0" name='Enter your Email'/></Link>
      </AdviceSection>
      <Button name='Accept'/>
    </RecoverForm>
  )
}
