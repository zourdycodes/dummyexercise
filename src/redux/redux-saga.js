import { all, put, takeLatest, fork, call } from "redux-saga/effects";
import {
  FETCH_RECIPE_FAILED,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
} from "./actionTypes";

import { getRecipes } from "./api";

export function onLoadRecipeAsync({ payload: query }) {
  try {
    const response = call(getRecipes, query);

    put({ type: FETCH_RECIPE_SUCCESS, payload: response.data });
  } catch (error) {
    put({ type: FETCH_RECIPE_FAILED, payload: error });
  }
}

export function onLoadRecipe() {
  takeLatest(FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function rootSaga() {
  all([...recipeSaga]);
}
