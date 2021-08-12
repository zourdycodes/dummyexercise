import { createContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { reducer } from "./reducer";

const API_KEY = "2120b1696f02f429b836e17aef27a8fa	";
const API_ID = "a1515971";

export const AppContext = createContext();

const initialState = {
  result: [],
  loading: true,
  error: false,
};

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("chicken");

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok && response.status >= 400 && response.status <= 500) {
        dispatch({ type: "FETCH_DATA_FAILED" });
      }

      const data = await response.json();

      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.hits });
    };

    fetchData();
  }, [query, url]);

  return (
    <AppContext.Provider
      value={{
        dispatch,
        query,
        setQuery,
        error: state.error,
        loading: state.loading,
        dataResult: state.result,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
