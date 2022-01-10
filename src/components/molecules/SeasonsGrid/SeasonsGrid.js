import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Wrapper } from "./SeasonsGrid.styles";
import SeasonCard from "../../atoms/SeasonCard/SeasonCard";
import season1Img from "../../../assets/images/season1.jpg";
import season2Img from "../../../assets/images/season2.jpg";
import season3Img from "../../../assets/images/season3.jpg";
import season4Img from "../../../assets/images/season4.jpg";
import season5Img from "../../../assets/images/season5.jpg";

const seasonsData = [
  {
    id: 1,
    img: season1Img,
    episodes: "7",
  },
  {
    id: 2,
    img: season2Img,
    episodes: "13",
  },
  {
    id: 3,
    img: season3Img,
    episodes: "13",
  },
  {
    id: 4,
    img: season4Img,
    episodes: "13",
  },
  {
    id: 5,
    img: season5Img,
    episodes: "16",
  },
];

const SeasonsGrid = () => {
  const { episodes } = useContext(DataContext);

  const season1 = episodes.slice(7, 7 + 13);

  return (
    <Wrapper>
      {seasonsData.map((season) => {
        return (
          <SeasonCard
            key={season.id}
            img={season.img}
            episodes={season.episodes}
          />
        );
      })}
    </Wrapper>
  );
};

export default SeasonsGrid;
