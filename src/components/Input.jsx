import React from 'react'
import styled from 'styled-components'


const InputField = styled.input`
border: solid 2px #aaa;
font-size: 1.3rem;
height: 2.5rem;
border-radius: 7px;
padding: 0 0.3rem;
outline: none;
`

const Label = styled.label`
  cursor: text;
  user-select: none;
  background-color: white;
  font-size: 1.2rem;
  color: #ccc;
  position: absolute;
  top: 0.75rem;
  left: 0.5rem;
  transition-property: top, font-size, padding;
  transition-duration: .2s;
  
`

const InputSection = styled.section`
  position: relative;
  text-align: center;
  margin-bottom: 24px;
  input:focus + label, input:not(:placeholder-shown) + label {
    background: linear-gradient(0deg, #ffffff 50%, #f5f5f5 80%);
    padding: 0 0.2rem;
    font-size: 0.8rem;
    top: -0.45rem;
    left: 0.5rem;
} 
`

export default function Input({label, id, type}) {

  const inputFocus = () => {
    const inputDom = document.getElementById(`input-${id}`);
    inputDom.focus();
  }

  return <InputSection>
    <InputField type={type} name='field' id={`input-${id}`} placeholder=' ' autoComplete="off" required/>
    <Label onClick={inputFocus} htmlFor='field'>{label}</Label>
  </InputSection>
    
  
}
