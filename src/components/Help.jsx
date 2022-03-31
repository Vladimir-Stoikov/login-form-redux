import React from 'react'
import styled from 'styled-components'

const HelpParagraph = styled.p`
cursor: pointer;
user-select: none;
margin: ${({margin}) => margin ? margin : ''};
color: #777;
&:hover {
  ${({ hoverOff}) =>  hoverOff ?  null : 'color: #ff88a2' };
}
`

export default function Help({name, margin, hoverOff}) {
  return <HelpParagraph margin={margin}  hoverOff={ hoverOff}>
    {name}
  </HelpParagraph>
}
