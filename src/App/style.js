import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(9),
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  smallContent: {
    paddingLeft: theme.custom.variables.menuLeftWidth,
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    backgroundColor:"#f8f9fa",
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(5),
  },
}));
