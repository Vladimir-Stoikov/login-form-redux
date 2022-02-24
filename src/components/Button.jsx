import React from 'react'
import styled from 'styled-components'

const ButtonSt = styled.button`
  border: none;
  border-radius: 10px;
  font: inherit;
  font-size: 1.2rem;
  color: white;
  background: linear-gradient(45deg, #ec96ec, #f18098);
  padding: 0.7rem;
`

export default function Button({name}) {
  return <ButtonSt>{name}</ButtonSt>
}
