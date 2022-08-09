import styled, { createGlobalStyle } from 'styled-components'

export const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: all 1.4s;

  & > .modal-box {
    transition: all 1.4s;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 40px;
    background: white;
    border-radius: 20px;

    & header {
      font-weight: bold;
      margin: 0 0 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid grey;

      h1 {
        font-size: 150%;
      }
    }

    & footer {
      margin: 20px 15px 10px;
    }
  }
`
export const StyledList = styled.ul`
  padding: 10px 40px;
  & > li {
    list-style: none;
    text-align: left;
    margin: 0 10px 10px;
  }
`

export const StyledCheckboxFieldset = styled.fieldset`
  padding: 10px 40px;
  margin: 10px 15px;
  display: flex;
  & > legend {
    padding: 0 10px;
    border-radius: 3px;
    font-size: 16px;
  }
  & label {
    padding: 5px;
    text-transform: capitalize;
  }
  & > .checkbox-group {
    width: 100%;
  }
`
export const StyledRadioFieldset = styled.fieldset`
  padding: 10px 40px;
  margin: 10px 15px;
  display: flex;
  & > .radio-group {
    width: 100%;
  }
  & > legend {
    padding: 0 10px;
    border-radius: 3px;
    font-size: 16px;
  }
  & label {
    padding: 5px;
    text-transform: capitalize;
    
  }
`
export const StyledLabel = styled.label`
  text-align: left;
  width: 100%;
  height: 25px;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0);
  box-shadow: inset grey 0 0 0 1px;
  border: 0;
  border-radius: 3px;
  padding: 3px 4px;
  font-size: 16px;
  transition: all .2s ease;
  margin: 5px 0 15px;

  &:focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, rgba(31, 210, 165, 0.9) 0 0 0 2px;
  }
`
export const StyledButton = styled.button`
  background-color: white;
  padding: 1em 1.5em;
  border-radius: 3px;
  text-decoration: none;
  margin: 0 10px;
`
export const StyledSelect = styled.select`
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0);
  box-shadow: inset grey 0 0 0 1px;
  border: 0;
  border-radius: 3px;
  padding: 3px 4px;
  font-size: 16px;
  transition: all .2s ease;
  margin: 5px 0 15px;

  &:focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, rgba(31, 210, 165, 0.9) 0 0 0 2px;
  }
`
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-weight: 400;
  }
  
  h1 {
    text-transform: uppercase;
  }
`