import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'
import Title from './Title'


export default function Wrong({desciption = 'error'}) {

  const navigate = useNavigate();

  return <>
      <Title title='Error' margin="0 0 15px 0" fontSize='1.8rem'/>
      <p>{desciption}</p>
      <Button name='Go to menu' margin='20px 0 0 0' func={() => navigate('/')} type='button'/>
      </>
}
