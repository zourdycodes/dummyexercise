import { SearchInput } from "./components/SearchInput";
import { SearchResult } from "./components/SearchResult";
import "./global/App.css";

export const App = () => {
  return (
    <div className="App">
      <h2 className="title">Healthy Food Search</h2>

      <SearchInput />
      <SearchResult />
    </div>
  );
};
