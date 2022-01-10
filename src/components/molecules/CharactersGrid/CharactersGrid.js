import React, { useContext } from "react";
import CharacterCard from "../../atoms/CharacterCard/CharacterCard";
import { DataContext } from "../../providers/DataProvider";
import { Wrapper } from "./CharactersGrid.styles";

const CharactersGrid = ({ number }) => {
  const { characters } = useContext(DataContext);

  const items = characters.slice(0, number);

  return (
    <Wrapper>
      {items.map((item) => {
        return (
          <CharacterCard
            key={item.char_id}
            id={item.char_id}
            img={item.img}
            name={item.name}
          />
        );
      })}
    </Wrapper>
  );
};

export default CharactersGrid;
