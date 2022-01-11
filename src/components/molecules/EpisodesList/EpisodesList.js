import React from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import EpisodeInfo from "../../atoms/EpisodeInfo/EpisodeInfo";
import { DataContext } from "../../providers/DataProvider";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 4rem 0;
`;

const EpisodesList = () => {
  const { episodes, seasons, actualSeason } = useContext(DataContext);

  let episodesList = [];

  const setSeason = () => {
    switch (actualSeason) {
      case 1:
        episodesList = episodes.slice(0, 7);
        break;
      case 2:
        episodesList = episodes.slice(7, 20);
        break;
      case 3:
        episodesList = episodes.slice(20, 33);
        break;
      case 4:
        episodesList = episodes.slice(33, 46);
        break;
      case 5:
        episodesList = episodes.slice(46, 62);
        break;
      default:
        episodesList = episodes.slice(0, 7);
        break;
    }
  };

  setSeason();

  console.log(actualSeason);

  return (
    <Wrapper>
      <h2>Episodes list</h2>
      {episodesList.map((episode) => {
        return (
          <EpisodeInfo
            key={episode.id}
            id={episode.id}
            title={episode.title}
            airDate={episode.air_date}
          />
        );
      })}
    </Wrapper>
  );
};

export default EpisodesList;
