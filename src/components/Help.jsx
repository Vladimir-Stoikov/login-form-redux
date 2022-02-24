import React from 'react'
import styled from 'styled-components'

const HelpParagraph = styled.p`
margin-bottom: 15px;
color: #777;
`

export default function Help({name}) {
  return <HelpParagraph>
    {name}
  </HelpParagraph>
}
