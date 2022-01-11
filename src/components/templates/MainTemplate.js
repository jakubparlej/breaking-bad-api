import React from "react";
import Footer from "../organisms/Footer/Footer";
import Navbar from "../organisms/Navbar/Navbar";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
