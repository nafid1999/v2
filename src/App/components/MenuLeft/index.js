import React, { Fragment, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Link, useLocation } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ChevronRight from "@material-ui/icons/ChevronRightOutlined";
import ExpandMore from "@material-ui/icons/ExpandMoreOutlined";
import { useTranslation } from "react-i18next";

import clsx from "clsx";
import { useSelector } from "react-redux";
import logo from "../../logo.png";

import useStyles from "./style.js";

export default function ({ menu }) {
  const classes = useStyles();
  const menuExpanded = useSelector(({ appState }) => appState.menuExpanded);
  const headerExpanded = useSelector(({ appState }) => appState.headerExpanded);

  const [openSubMenu, setOpenSubMenu] = useState(1);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const onListClick = (items, index) => {
    if (items) {
      setOpenSubMenu(openSubMenu === index ? -1 : index);
    }
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.menuLeft,
          !menuExpanded && classes.menuLeftClose,
          headerExpanded && classes.menuLeftExpanded
        ),
      }}
      open={menuExpanded}
    >
      <div className={classes.logo}>
        {!headerExpanded && <img src={logo} alt="Logo" />}
      </div>
      <List>
        {menu.map(({ name, icon, path = "", items }, index) => (
          <Fragment key={index}>
            <ListItem
              button
              component={Link}
              to={path}
              onClick={() => onListClick(items, index)}
              className={clsx(path === pathname && classes.selected)}
            >
              <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              <ListItemText primary={t(name)} />
              {items &&
                (openSubMenu !== index ? <ChevronRight /> : <ExpandMore />)}
            </ListItem>
            {items && (
              <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={classes.nested}>
                  {items.map(({ name, icon, path }) => (
                    <ListItem
                      key={path}
                      button
                      component={Link}
                      to={path}
                      className={clsx(path === pathname && classes.selected)}
                    >
                      <ListItemIcon className={classes.icon}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={t(name)} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}
