import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    "&:disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto"
    }
  },
  input: {
    margin: theme.spacing(1)
  },
  link: {
    margin: theme.spacing(1)
  }
}));
