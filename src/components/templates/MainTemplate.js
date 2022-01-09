import React from "react";
import Navbar from "../organisms/Navbar/Navbar";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
