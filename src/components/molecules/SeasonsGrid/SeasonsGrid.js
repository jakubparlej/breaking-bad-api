import React from "react";
import { Wrapper } from "./SeasonsGrid.styles";
import SeasonCard from "../../atoms/SeasonCard/SeasonCard";
import { seasonsData } from "../../providers/data";

const SeasonsGrid = () => {
  return (
    <Wrapper>
      {seasonsData.map((season) => {
        return (
          <SeasonCard
            id={season.id}
            key={season.id}
            img={season.img}
            name={season.name}
            episodesNum={season.episodes}
          />
        );
      })}
    </Wrapper>
  );
};

export default SeasonsGrid;
