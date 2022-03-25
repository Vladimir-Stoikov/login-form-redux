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
  margin: ${({margin}) => margin ? margin : '0' };
  user-select: none;
  &:hover {
    background: linear-gradient(45deg, #ffa3ff, #ff88a2);
  }
  &:active {
    transform: scale(0.98);
  }
`

export default function Button({name, margin, func, type}) {
  return <ButtonSt margin={margin} onClick={func} type={type}>{name}</ButtonSt>
}
