import React from "react";
import { Wrapper, Img, Info, Table, Row } from "./Character.styles";
import CharactersGrid from "../components/molecules/CharactersGrid/CharactersGrid";

const Character = ({ char }) => {
  return (
    <Wrapper>
      <Img>
        <img src={char.img} alt={char.name} />
      </Img>
      <Info>
        <h1>{char.name}</h1>
        <Table>
          <Row>
            <span>Nickname: </span>
            <span>{char.nickname}</span>
          </Row>
          <Row>
            <span>Birthday: </span>
            <span>{char.birthday}</span>
          </Row>
          <Row>
            <span>Occupation: </span>
            <span>{char.occupation}</span>
          </Row>
          <Row>
            <span>Portrayed: </span>
            <span>{char.portrayed}</span>
          </Row>
        </Table>
        <>
          <h2>See also</h2>
          <CharactersGrid number="5" />
        </>
      </Info>
    </Wrapper>
  );
};

export default Character;
