import React from "react";
import ReactDOM from "react-dom";
import CharactersProvider from "./components/providers/CharactersProvider";
import Root from "./views/Root";

ReactDOM.render(
  <React.StrictMode>
    <CharactersProvider>
      <Root />
    </CharactersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
