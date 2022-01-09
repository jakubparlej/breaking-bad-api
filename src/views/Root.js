import React from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import Home from "./Home";
import CharactersProvider from "../components/providers/CharactersProvider";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <CharactersProvider>
          <Home />
        </CharactersProvider>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
