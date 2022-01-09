import React from "react";
import CharactersGrid from "../components/molecules/CharactersGrid/CharactersGrid";
import Header from "../components/organisms/Header/Header";

const Characters = () => {
  return (
    <>
      <Header title="Characters" />
      <CharactersGrid />
    </>
  );
};

export default Characters;
