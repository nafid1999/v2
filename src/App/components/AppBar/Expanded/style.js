import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root:{
    height: theme.custom.variables.headerHeight,
    padding:theme.spacing(1, 4)
  },
  logo:{
    width: 150
  },
  title:{
    lineHeight: 1,
    color:"#FFFFFF"
  }
}));
