import { createMuiTheme } from "@material-ui/core/styles";

const getTheme = (direction) => {
  const theme = createMuiTheme({
    direction,
    palette: {
      primary: {
        main: "#3c4d6f",
      },
      secondary: {
        main: "#0da8ad",
        contrastText: "#FFFFFF",
      },
      background: {
        // default: "#f8f9fa",
        default: "#3c4d6f",
      },
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
    },

    props: {
      MuiCard: {
        elevation: 25,
      },
    },
    custom: {
      variables: {
        menuLeftWidth: 280,
        headerHeight: 130,
      },
      color: {
        color1: "#FF6384", // Pink
        color2: "#9d67ab", // Purple
        color3: "#2cd9c5", // Green
        bakgroundColor: "#f4f7fa",
      },
    },
  });

  theme.overrides = {
    ...theme.overrides,
    MuiTableHead: {
      root: {
        backgroundColor: "#f4f7fa",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "0.8rem",
        padding: `10px ${theme.spacing(2)}px`,
      },
      head: {
        color: "#3c4d6f",
      },
    },
  };
  theme.shadows[24] = "0 1px 10px -1px rgba(0,0,0,.2)";
  theme.shadows[25] = "0 1px 15px 1px rgba(69,65,78,.08)";
  theme.shadows[26] = "0px 0px 0px 1px rgba(69,65,78,.1)";
  return theme;
};
export default getTheme;
