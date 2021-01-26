import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    "& > .MuiCardContent-root":{
      padding: "0",
    }
  },
  bgLight:{
    backgroundColor: theme.custom.color.bakgroundColor
  }
}));