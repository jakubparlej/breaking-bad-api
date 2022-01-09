import React from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import Home from "./Home";
import CharactersProvider from "../components/providers/CharactersProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Characters";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <CharactersProvider>
            <Routes>
              <Route path="/characters" element={<Characters />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </CharactersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

// {items.map((item) => {
//   return (
//     <Route
//       path={`/${item.chard_id}`}
//       element={<div>{item.name}</div>}
//     />
//   );
// })}
