import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



import Button from '../components/Button'
import Title from '../components/Title'


const HrLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ff88a2;
  margin-bottom: 15px;
`

const MenuSection = styled.section`
  border-radius: 20px;
  margin: 45vh auto;
  padding: 20px 0;
  background-color: white;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);
  h1 {
    margin-bottom: 12px;
  }
`

export default function Menu() {

  return <MenuSection>
    <Title title='Sign Up App'/>
    <HrLine/>
    <Link to="/Login"><Button name='Login' margin='0 0 15px 0'/></Link>
    <Link to="/SignUp"><Button name='Sign Up'/></Link>
  </MenuSection>
    
}
