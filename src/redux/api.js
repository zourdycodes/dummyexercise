import axios from "axios";

const API_KEY = "2120b1696f02f429b836e17aef27a8fa	";
const API_ID = "a1515971";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data;
};
