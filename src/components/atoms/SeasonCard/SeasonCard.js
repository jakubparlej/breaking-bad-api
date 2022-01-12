import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Card, CardImg, Season, Episodes } from "./SeasonCard.styles";

const SeasonCard = ({ id, img, name, episodesNum }) => {
  const { setActualSeason } = useContext(DataContext);

  const click = () => {
    setActualSeason(id);
  };

  return (
    <>
      <Card onClick={click} to="/breaking-bad-api/episodes">
        <CardImg>
          <img src={img} alt="" />
        </CardImg>
        <Season>{name}</Season>
        <Episodes>{episodesNum} Episodes</Episodes>
      </Card>
    </>
  );
};

export default SeasonCard;
