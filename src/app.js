import { SearchInput } from "./components/SearchInput";
import "./global/App.css";

export const App = () => {
  return (
    <div className="App">
      <h2 className="title">Food Search</h2>

      <SearchInput></SearchInput>
    </div>
  );
};
