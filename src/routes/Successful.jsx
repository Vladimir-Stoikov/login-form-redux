import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Title from '../components/Title'

const SuccessSection = styled.section`
  padding: 15px;
  height: auto;
  width: 300px;
  background-color: #fff;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  p {
    text-align: center;
  }
`

export default function Successful() {

  const navigate = useNavigate();
  const { state } = useLocation();

  return <SuccessSection>
    <Title title='Successful' margin={'8% 0 30px 0'}/>
    <p>{ state }</p>
    <Button name='Go to Log in' margin='30px 0 0 0' func={() => navigate('/Login')}/>
  </SuccessSection>
    
  
}
