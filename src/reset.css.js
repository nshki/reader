import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  .container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyle;
