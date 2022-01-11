import React, { useContext } from "react";
import Header from "../components/organisms/Header/Header";
import SeasonsGrid from "../components/molecules/SeasonsGrid/SeasonsGrid";
import { DataContext } from "../components/providers/DataProvider";

const Episodes = () => {
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
    <>
      <Header title="Episodes" />
      <SeasonsGrid />
      {episodesList.map((episode) => {
        return <p>{episode.title}</p>;
      })}
    </>
  );
};

export default Episodes;
