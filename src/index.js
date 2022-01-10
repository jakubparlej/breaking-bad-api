import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./components/providers/DataProvider";
import Root from "./views/Root";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Root />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
