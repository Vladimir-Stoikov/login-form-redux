import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
  color: #ff88a2;
  font-family: inherit;
  margin: ${({margin}) => margin ? margin : '0 0 30px 0'};
`

export default function Title({title, margin}) {
  return <TitleH1 margin={margin}>{title}</TitleH1>
}
