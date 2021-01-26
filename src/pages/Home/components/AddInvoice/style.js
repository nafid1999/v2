import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dropzone: {
    background: theme.custom.color.bakgroundColor,
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiDropzoneArea-icon": {
      color: theme.palette.primary.main,
      opacity: 0.8,
    },
  },
  dropzoneCard:{
    width: "100%",
  },
  dropzoneActions:{
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  ,
  text: {
    margin:0,
    color: theme.palette.primary.main,
    ...theme.typography.subtitle1,
  },
}));
