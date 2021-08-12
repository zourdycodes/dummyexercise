import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState } from "react";
import { AppContext } from "../context/globalContext";
import { SnackbarError } from "./Snackbar";

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

  const [open, setOpen] = useState(false);

  const { setQuery, dispatch, error } = useContext(AppContext);

  const classes = useStyles();

  const updateQuery = () => {
    setQuery(search);
    dispatch({ type: "FETCH_DATA_LOADING" });

    if (!search || error) {
      setOpen(true);
    }

    setSearch("");
  };

  return (
    <div>
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
          onClick={updateQuery}
        >
          Search
        </Button>
      </form>

      {open && <SnackbarError open={open} setOpen={setOpen} />}
    </div>
  );
};
