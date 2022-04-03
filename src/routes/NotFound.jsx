import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Title from '../components/Title'

const NotFoundPage = styled.section`
  height: auto;
  padding: 15px 0;
  width: 300px;
  background-color: #fff;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`

export default function NotFound() {
 
  const navigate = useNavigate();

  return <NotFoundPage>
    <Title title='404' margin={'5px 0 20px 0'}/>
    <p>That page doesn't exist</p>
    <Button name='Go to menu' margin='20px 0 0 0' func={() => navigate('/')}/>
  </NotFoundPage>
  
}
