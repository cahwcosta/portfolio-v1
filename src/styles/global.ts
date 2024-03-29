import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1F131F;
    color: #F9F9F9;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    background-color: #1F131F;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #EA4F87;
    border-radius: 5px; 
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  
`
