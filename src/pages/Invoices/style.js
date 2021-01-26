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
  root: {
    backgroundColor: theme.palette.background.paper
},
tableCell:{
  fontWeight: "300",
  maxWidth: "5px"
},
controlButton:{
  backgroundColor: theme.palette.success.main
},
rejectButton:{
  backgroundColor: theme.palette.warning.light
},
correctButton:{
  backgroundColor: theme.palette.warning.dark
},
space:{
  marginTop:"10px"
}
}));
