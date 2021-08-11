import { useContext } from "react";
import { AppContext } from "../context/globalContext";
import { RecipeCard } from "./Card";

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

  return (
    <div className="card-grid">
      {loading ? (
        <div>
          <h1>Loading ...</h1>
        </div>
      ) : (
        result?.map((data, index) => {
          const { recipe } = data;

          const { image, label, source, healthLabels, ingredientLines } =
            recipe;

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
        })
      )}
    </div>
  );
};
