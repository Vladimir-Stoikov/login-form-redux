import React from 'react'
import styled from 'styled-components'

const HelpParagraph = styled.p`
cursor: pointer;
user-select: none;
margin: ${({margin}) => margin ? margin : ''};
color: #777;
`

export default function Help({name, margin}) {
  return <HelpParagraph margin={margin}>
    {name}
  </HelpParagraph>
}
