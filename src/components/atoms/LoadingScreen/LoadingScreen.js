import React from "react";
import loading from "../../../assets/images/loading.gif";
import { Wrapper } from "./LoadingScreen.styles";

const LoadingScreen = () => {
  return (
    <Wrapper>
      <img src={loading} alt="Loading..." />
    </Wrapper>
  );
};

export default LoadingScreen;
