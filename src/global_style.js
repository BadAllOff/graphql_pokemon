import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  
  body {
    margin: 20px 0;
    padding: 0 20px;
    line-height: 1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #202020;
    background-color: #fbfbfb;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    display: flex;
    max-width: 550px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
