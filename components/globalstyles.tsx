import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #151515;
    font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smo0thing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
