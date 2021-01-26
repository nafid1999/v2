import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import clsx from "clsx";
import menu from "./menu";
import AppBar from "./components/AppBar";
import MenuLeft from "./components/MenuLeft";
import useStyles from "./style.js";
import AddInvoices from "../pages/Invoices/Add";
import invoiceDetails from "../pages/Invoices/Detail";

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <Box pt={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {t("Copyright")} ©
        <Link color="inherit" href="https://novelis.io" target="_blank">
          Novelis innovation
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}; 

const getTransformedMenu = () => {
  const transformedMenu = [];
  menu.forEach(({ path, component, items }) => {
    if (items) {
      items.forEach(({ path, component }) => {
        transformedMenu.push({ path, component });
      });
    } else transformedMenu.push({ path, component });
  });
  return transformedMenu;
};

function App() {
  const classes = useStyles();
  const menuExpanded = useSelector(({ appState }) => appState.menuExpanded);
  return (
    <Fragment>
      <CssBaseline />
      <AppBar />
      <div className={classes.appBarSpacer} />

      <div className={classes.wrapper}>
        <MenuLeft menu={menu} />
        <main
          className={clsx(
            classes.content,
            menuExpanded && classes.smallContent
          )}
        >
          <Container maxWidth={false} className={classes.container}>
            <Switch>
              <Route path="/invoices/details" exact component={invoiceDetails} />
              <Route path='/add' exact component={AddInvoices} />
              {getTransformedMenu().map(({ path, component }, index) => (
                <Route key={index} exact path={path} component={component} />
              ))}
            </Switch>
            <Copyright />
          </Container>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
