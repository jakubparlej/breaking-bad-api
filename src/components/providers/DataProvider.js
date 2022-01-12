import React, { useState, useEffect } from "react";
import axios from "axios";
import { seasonsData } from "./data";

const baseURL = "https://www.breakingbadapi.com/api/";

export const DataContext = React.createContext({
  characters: [],
  episodes: [],
  seasons: [],
  quotes: [],
  actualSeason: "",
  isLoading: () => {},
});

const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [actualSeason, setActualSeason] = useState("1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}characters`);

      setCharacters(result.data);
      setIsLoading(false);
      setSeasons(seasonsData);
      setActualSeason("1");
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}episodes`);

      setEpisodes(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}quotes`);

      setQuotes(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <DataContext.Provider
      value={{
        characters,
        episodes,
        seasons,
        quotes,
        actualSeason,
        setActualSeason,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
