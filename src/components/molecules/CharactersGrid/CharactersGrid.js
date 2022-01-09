import React, { useContext } from "react";
import CharacterCard from "../../atoms/CharacterCard/CharacterCard";
import { CharactersContext } from "../../providers/CharactersProvider";
import { Wrapper, Loading } from "./CharactersGrid.styles";
import spinner from "../../../assets/images/spinner.gif";

const CharactersGrid = ({ number }) => {
  const { characters, isLoading } = useContext(CharactersContext);

  const items = characters.slice(0, number);

  return isLoading ? (
    <Loading>
      <img src={spinner} alt="" />
    </Loading>
  ) : (
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
