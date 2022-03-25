import React from 'react'
import styled from 'styled-components'

const ErrorsSection = styled.section`
  width: 280px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  padding: 10px;
  border-radius: 10px;
  span:not(:last-child) {
    margin: 0 0 8px 0;
  }
`
const Error = styled.span`
text-align: center;
color: red;
`

export default function Errors({errors}) {


  return <ErrorsSection>
    {errors ? errors.map((error, id) => <Error key={id}>{error}</Error>) : null}
  </ErrorsSection>
}
