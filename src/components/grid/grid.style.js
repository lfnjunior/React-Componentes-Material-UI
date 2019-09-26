import { makeStyles } from "@material-ui/core/styles";

const GridSyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  textCenter: {
    textAlign: "center"
  }
}));

export default GridSyle;
