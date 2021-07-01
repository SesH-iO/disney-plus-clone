import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Roboto Condensed', sans-serif; */
    box-sizing: border-box;
  }

  body{
    background: #0C111B;
  }
`;

export default GlobalStyle;
