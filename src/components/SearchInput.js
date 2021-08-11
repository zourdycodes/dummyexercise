import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

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
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search Food" variant="outlined" />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchIcon />}
        style={{
          width: "auto",
          height: "53px",
        }}
      >
        Search
      </Button>
    </form>
  );
};
