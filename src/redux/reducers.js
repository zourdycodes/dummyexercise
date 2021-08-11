import {
  FETCH_RECIPE_FAILED,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
} from "./actionTypes";

const initialState = {
  recipes: [],
  error: null,
  loading: false,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };

    case FETCH_RECIPE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { recipeReducer };
