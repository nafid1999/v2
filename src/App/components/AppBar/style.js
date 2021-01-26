import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
    justifyContent:"space-between",
    ...console.log("theme", theme),
  },
  appBar: {
    borderTopLeftRadius: 5,
    marginLeft: theme.spacing(9),
    width: `calc(100% - ${theme.spacing(9)}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: theme.custom.variables.menuLeftWidth,
    width: `calc(100% - ${theme.custom.variables.menuLeftWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarFolded:{
    top: "100%"
  },
  menuButton: {
    marginRight: 36,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.grey[200]}`,
    "&:hover": {
      borderColor: fade(theme.palette.primary.main, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(1),
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex:1,
    top: -2
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
  },
}));
