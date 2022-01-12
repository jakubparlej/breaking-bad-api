import React, { useContext } from "react";
import styled from "styled-components";
import EpisodeInfo from "../../atoms/EpisodeInfo/EpisodeInfo";
import { DataContext } from "../../providers/DataProvider";
import { theme } from "../../../assets/styles/theme";

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const Header = styled.div`
  width: 100%;
  display: grid;
  padding: 1rem;
  grid-template-columns: 50px 50% 20% 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${theme.media.medium} {
    grid-template-columns: 30px 60% 30% 1fr;
  }

  div {
    color: rgba(255, 255, 255, 0.5);
  }

  div:last-of-type {
    text-align: right;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 4rem 0;
`;

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
    <Wrapper>
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
