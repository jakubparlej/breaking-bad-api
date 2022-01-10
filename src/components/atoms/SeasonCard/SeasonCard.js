import React from "react";
import { Card, CardImg, Season, Episodes } from "./SeasonCard.styles";

const SeasonCard = ({ img, episodes }) => {
  return (
    <Card>
      <CardImg>
        <img src={img} alt="" />
      </CardImg>
      <Season>Season 1</Season>
      <Episodes>{episodes} Episodes</Episodes>
    </Card>
  );
};

export default SeasonCard;
