import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Characters";
import { DataContext } from "../components/providers/DataProvider";
import LoadingScreen from "../components/atoms/LoadingScreen/LoadingScreen";
import Character from "./Character";
import ScrollToTop from "../components/helpers/ScrollToTop";
import Episodes from "./Episodes";

const Root = () => {
  const { characters, isLoading } = useContext(DataContext);

  const items = characters;

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route end path="/breaking-bad-api" element={<Home />} />
            <Route
              end
              path="/breaking-bad-api/characters"
              element={<Characters />}
            />
            <Route
              end
              path="/breaking-bad-api/episodes"
              element={<Episodes />}
            />
            {items.map((item) => {
              return (
                <Route
                  end
                  key={item.char_id}
                  path={"/breaking-bad-api/" + item.char_id}
                  element={<Character char={item} />}
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
