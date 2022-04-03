import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Title from '../components/Title'
import Wrong from '../components/Wrong'


const ProfileSection = styled.section`
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

export default function Profile() {

  const navigate = useNavigate();
  const { state } = useLocation();

  return <ProfileSection>
    { state ? 
    <>
    <Title title={state.toUpperCase()} margin={'10px 0 20px 0'}/>
    <p>Successfully login to Profile</p>
    <Button name='Log out' margin='25px 0 0 0' func={() => navigate('/')}/>
    </>
    : 
    <Wrong desciption='User not logged in'/>
    }
        
  </ProfileSection>
  
}
