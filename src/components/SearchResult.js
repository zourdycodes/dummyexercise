import { useContext } from "react";
import { AppContext } from "../context/globalContext";
import { RecipeCard } from "./Card";
import { Loading } from "./Loading";

export const SearchResult = () => {
  const { dataResult, error, loading } = useContext(AppContext);

  const [result] = dataResult;

  if (error) {
    return (
      <>
        <h1>error, cannot fetch the data please check your API endpoint...</h1>
      </>
    );
  }

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "8rem" }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div className="card-grid">
      {result?.map((data, index) => {
        const { recipe } = data;

        const { image, label, source, healthLabels, ingredientLines } = recipe;

        return (
          <RecipeCard
            key={index}
            label={label}
            image={image}
            ingredientLines={ingredientLines}
            source={source}
            healthLabels={healthLabels}
          />
        );
      })}
    </div>
  );
};
