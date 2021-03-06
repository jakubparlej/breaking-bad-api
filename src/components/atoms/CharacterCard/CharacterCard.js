import React from "react";
import { Card, CardImg, Name } from "./CharacterCard.styles";

const CharacterCard = ({ id, name, img }) => {
  return (
    <Card to={"/breaking-bad-api/" + id}>
      <CardImg id={id}>
        <img src={img} alt={name} />
      </CardImg>
      <Name>{name}</Name>
    </Card>
  );
};

export default CharacterCard;
