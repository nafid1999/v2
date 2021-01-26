import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import get from "lodash/get";

export default (color) =>
  makeStyles((theme) => ({
    bgIcon: {
      backgroundColor: fade(get(theme, `palette.${color}`), 0.1),
    },
  }));
