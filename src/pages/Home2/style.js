import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  firstGrid: {
    margin: "0 -24px 32px -32px",
    width: "calc(100% + 48px)"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  filterArea:{
    backgroundColor:theme.palette.grey[200],
    padding:"20px 25% 20px 25%",
    margin: "0 -20px 32px -10px",
  }
}));
