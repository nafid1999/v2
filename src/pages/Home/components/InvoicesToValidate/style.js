import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  select: {
    padding: "12px",
  },
  deleteIcon:{
    color: theme.palette.error.main
  },
  downloadIcon:{
    color: theme.palette.success.main
  },
 
  table:{
    borderCollapse:"separate",
    borderSpacing: "0 15px",
  },
  tableHead: {
    background: "transparent"
  },
  tableRow: {
    background: theme.palette.common.white,
    cursor:"pointer",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      background: "white !important",
      boxShadow: theme.shadows[25],
      transform: "scale(1.01)"
    }
  },
  cardTable:{
    background: theme.palette.grey[200], 
  },
  tableCell:{
    borderBottom: "none",
    fontWeight: "300"
  },
  tableCellHead:{
    borderBottom: "none",
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(12),
    color: fade(theme.palette.primary.main, 0.5)
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  underlineText:{
    textDecoration: 'underline'
  }
}));
