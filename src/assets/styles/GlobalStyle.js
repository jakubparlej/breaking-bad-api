import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Roboto", sans-serif;
    background: ${theme.color.black};
    color: ${theme.color.white};
  }
  a, button {
    font-family: 'Roboto', sans-serif;
  }
  a, a:visited {
    color: none;
    text-decoration: none;
  }

  p {
    line-height: 150%;
  }

  h1 {
    font-size: 5rem;

    ${theme.media.medium} {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${theme.media.medium} {
      font-size: 1.5rem;
    }
  }
`;
