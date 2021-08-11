import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const ListIngredient = ({ list }) => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary={list} style={{ fontSize: "5px" }} />
      </ListItem>
    </List>
  );
};
