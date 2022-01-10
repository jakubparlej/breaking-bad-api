import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://www.breakingbadapi.com/api/";

export const DataContext = React.createContext({
  characters: [],
  isLoading: () => {},
});

const DataProvider = ({ children }) => {
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
    <DataContext.Provider
      value={{
        characters,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
