import React from "react";
import CharactersSection from "../components/organisms/CharactersSection/CharactersSection";
import Header from "../components/organisms/Header/Header";
import SeasonsSection from "../components/organisms/SeasonsSection/SeasonsSection";

const Home = () => {
  return (
    <>
      <Header title="Breaking Bad" genres={true} desc={true} />
      <CharactersSection />
      <SeasonsSection />
    </>
  );
};

export default Home;
