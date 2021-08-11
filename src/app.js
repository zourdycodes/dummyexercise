import { SearchInput } from "./components/SearchInput";
import "./global/App.css";
import { getRecipes } from "./redux/api";

export const App = () => {
  return (
    <div className="App">
      <h2 className="title">Food Search</h2>

      <SearchInput />
    </div>
  );
};
