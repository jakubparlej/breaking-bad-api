import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://www.breakingbadapi.com/api/";

export const CharactersContext = React.createContext({
  characters: [],
  isLoading: () => {},
});

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}characters`);

      setCharacters(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        isLoading,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
