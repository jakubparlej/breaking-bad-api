import React from "react";
import Header from "../components/organisms/Header/Header";
import SeasonsGrid from "../components/molecules/SeasonsGrid/SeasonsGrid";
import EpisodesList from "../components/molecules/EpisodesList/EpisodesList";

const Episodes = () => {
  return (
    <>
      <Header title="Episodes" />
      <SeasonsGrid />
      <EpisodesList />
    </>
  );
};

export default Episodes;
