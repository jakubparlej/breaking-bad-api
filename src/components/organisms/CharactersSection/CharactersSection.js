import React from "react";
import Button from "../../atoms/Button/Button";
import CharactersGrid from "../../molecules/CharactersGrid/CharactersGrid";
import { Wrapper, Header } from "./CharactersSection.styles";

const CharactersSection = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Characters</h2>
        <Button title="All characters" />
      </Header>
      <CharactersGrid number="6" />
    </Wrapper>
  );
};

export default CharactersSection;
