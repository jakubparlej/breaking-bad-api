import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://www.breakingbadapi.com/api/";

export const DataContext = React.createContext({
  characters: [],
  episodes: [],
  isLoading: () => {},
});

const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}characters`);

      setCharacters(result.data);
      setIsLoading(false);
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

  return (
    <DataContext.Provider
      value={{
        characters,
        episodes,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
