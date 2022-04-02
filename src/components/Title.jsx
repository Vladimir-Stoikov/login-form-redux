import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
  margin: ${({margin}) => margin ? margin : '0 0 30px 0'};
  width: 100%;
  padding: ${({padding}) => padding ? padding : '0'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '2rem' };
  color: #ff88a2;
  font-family: inherit;
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
`

export default function Title({title, margin, padding, fontSize, textAlign}) {
  return <TitleH1 margin={margin} padding={padding} fontSize={fontSize} textAlign={textAlign}>{title}</TitleH1>
}
