import React from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate></MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
