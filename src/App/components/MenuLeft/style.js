import { makeStyles, darken } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuLeft: {
    position: "fixed",
    whiteSpace: "nowrap",
    width: theme.custom.variables.menuLeftWidth,
    background: "transparent",
    color: theme.palette.common.white,
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuLeftExpanded:{
    top: theme.custom.variables.headerHeight
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    "& > img": {
      width: "60%",
      maxWidth: "95px"
    },
    ...theme.mixins.toolbar,
  },
  icon: {
    color: theme.palette.common.white,
  },
  menuLeftClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  tab: {
    minWidth: 0,
    textTransform: "inherit",
    padding: theme.spacing(2),
    lineHeight: "1.3rem",
  },
  indicator: {
    backgroundColor: theme.palette.common.white,
    left: "0",
  },
  nested: {
    backgroundColor: darken(theme.palette.primary.main, 0.1),
  },
  selected: {
    borderLeft: `5px solid ${theme.palette.common.white}`,
  }
}));
