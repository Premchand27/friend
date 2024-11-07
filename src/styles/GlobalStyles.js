import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #141414;
    color: #f5f5f5;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    color: #f5f5f5;
  }

  p {
    color: #d3d3d3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
