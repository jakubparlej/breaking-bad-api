import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Characters";
import { CharactersContext } from "../components/providers/CharactersProvider";
import LoadingScreen from "../components/atoms/LoadingScreen/LoadingScreen";

const Root = () => {
  const { characters, isLoading } = useContext(CharactersContext);

  const items = characters;

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/characters" element={<Characters />} />
            <Route path="/" element={<Home />} />
            {items.map((item) => {
              return (
                <Route
                  key={item.char_id}
                  path={"/" + item.char_id}
                  element={<h1>{item.name}</h1>}
                />
              );
            })}
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
