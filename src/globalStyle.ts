import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;

    overflow-x: hidden;
  }

  body {
    background-color: rgb(241, 241, 241);
  }

  button {
    cursor: pointer;
  }
`
