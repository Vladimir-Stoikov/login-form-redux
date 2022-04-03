import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Title from '../components/Title'
import Wrong from '../components/Wrong'

const InfoSection = styled.section`
  padding: 15px 0;
  height: auto;
  width: 300px;
  background-color: #fff;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  ul {
    li {
      list-style-type: none;
      padding: 0 15px;
      margin: 0 0 10px 0;
    }
  }

`

const HrLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ff88a2;
  margin-bottom: 10px;
`

export default function Info() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return <InfoSection>
    { state ? <>
    <Title title='User Creation Rules' margin='2% 0 10px 0' fontSize='1.6rem'/>
    <HrLine />
    { state === '/SignUp' ? 
    <>
    <Title title='Username Must :' margin='0 0 10px 27px' fontSize='1.3rem' textAlign='start'/>
    <ul>
      <li>Be between 4 and 16 characters</li>
      <li>Contain letters from A to Z, lowercase or uppercase and numbers from 0 to 9</li>
      <li>Not have any special symbols</li>
    </ul>
    </>
    : null }
    <Title title='Password Must :' margin='15px 0 10px 27px' fontSize='1.3rem' textAlign='start'/>
    <ul>
      <li>Be between 8 and 32 characters</li>
      <li>Must contain at least one English uppercase or lowercase character from A to Z.</li>
      <li>Must contain at least one Base 10 digit (0 through 9)</li>
    </ul>
    <Button name='Go back' margin='30px 0 0 0' func={() => navigate(state)}/>
    </> : 
    <Wrong desciption='Wrong page'/>
    }
    
  </InfoSection>
    
  
}
