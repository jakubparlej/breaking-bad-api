import React from "react";
import CharactersGrid from "../../molecules/CharactersGrid/CharactersGrid";
import { Wrapper, Header } from "./Characters.styles";

const Characters = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Characters</h2>
        <div>See all characters</div>
      </Header>
      <CharactersGrid number="6" />
    </Wrapper>
  );
};

export default Characters;
