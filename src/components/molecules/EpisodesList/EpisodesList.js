import React, { useContext } from "react";
import EpisodeInfo from "../../atoms/EpisodeInfo/EpisodeInfo";
import { DataContext } from "../../providers/DataProvider";
import { Header, Title, Wrapper } from "./EpisodesList.styles";

const EpisodesList = () => {
  const { episodes, actualSeason } = useContext(DataContext);

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

  return (
    <Wrapper id="list">
      <Title>Episodes list</Title>
      <Header>
        <div>#</div>
        <div>Title</div>
        <div>Air date</div>
        <div>Link</div>
      </Header>
      {episodesList.map((episode) => {
        return (
          <EpisodeInfo
            key={episode.episode}
            id={episode.episode}
            title={episode.title}
            airDate={episode.air_date}
          />
        );
      })}
    </Wrapper>
  );
};

export default EpisodesList;
