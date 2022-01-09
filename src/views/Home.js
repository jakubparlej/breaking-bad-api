import React from "react";
import CharactersSection from "../components/organisms/Characters/CharactersSection";
import Header from "../components/organisms/Header/Header";

const Home = () => {
  return (
    <>
      <Header title="Breaking Bad" genres={true} desc={true} />
      <CharactersSection />
    </>
  );
};

export default Home;
