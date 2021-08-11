import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../redux/actionTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const classes = useStyles();

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_START, payload: query });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  console.log(query);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search Food"
        variant="outlined"
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchIcon />}
        style={{
          width: "auto",
          height: "53px",
        }}
        onClick={updateSearch}
      >
        Search
      </Button>
    </form>
  );
};
