import React from "react";
import Button from "../../atoms/Button/Button";
import { Wrapper, Header } from "./SeasonsSection.styles";
import SeasonsGrid from "../../molecules/SeasonsGrid/SeasonsGrid";

const SeasonsSection = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Episodes</h2>
        <Button title="All episodes" />
      </Header>
      <SeasonsGrid />
    </Wrapper>
  );
};

export default SeasonsSection;
