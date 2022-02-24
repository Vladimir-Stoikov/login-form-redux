import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

const MenuSection = styled.section`
  border-radius: 20px;
  margin: 45vh auto;
  background-color: white;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);
`

export default function Menu() {
  return <MenuSection>
    <Link to="/Login"><Button name='Login' margin='0 0 15px 0'/></Link>
    <Link to="/Register"><Button name='Register'/></Link>
  </MenuSection>
    
  
}
