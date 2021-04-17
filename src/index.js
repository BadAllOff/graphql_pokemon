import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
