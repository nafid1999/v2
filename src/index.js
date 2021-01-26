import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import App from "./App";
import { configureStore } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./style/theme";
import "./i18n";

import "./index.css";
import "./style/utilities.css";

const store = configureStore();
const Main = () => {
  const { t } = useTranslation();
  const direction = t("ltl");

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme(direction)}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
