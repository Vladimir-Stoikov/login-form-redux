import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Title from '../components/Title'

const ProfileSection = styled.section`
  height: 200px;
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

  return <ProfileSection>
    <Title title='Profile' margin={'8% 0 30px 0'}/>
    <p>Successfully login to Profile</p>
    <Button name='Log out' margin='30px 0 0 0' func={() => navigate('/')}/>
  </ProfileSection>
  
}
