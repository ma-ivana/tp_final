import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.body.backgroundColor};
    font-family: ${props => props.theme.fonts};
  }
`;

export default GlobalStyles;