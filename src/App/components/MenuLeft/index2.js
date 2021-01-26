import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link, useLocation } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import clsx from "clsx";
import { useSelector } from "react-redux";
import logo from "./logo.png";

import useStyles from "./style.js";

export default function ({ menu }) {
  const classes = useStyles();
  const menuExpanded = useSelector(({ appState }) => appState.menuExpanded);
  const [openSubMenu, setOpenSubMenu] = useState(1);
  const { pathname } = useLocation();

  const onListClick = (items, index) => {
    if (items) {
      setOpenSubMenu(openSubMenu === index ? -1 : index);
    }
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.menuLeft, !menuExpanded && classes.menuLeftClose),
      }}
      open={menuExpanded}
    >
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={menu.findIndex((i) => i.path === pathname)}
        aria-label="Menu left"
        classes={{
          indicator: classes.indicator,
        }}
      >
        {menu.map(({ name, icon, path = "", items }, index) => (
          <Tab
            icon={icon}
            label={name}
            key={index}
            component={Link}
            to={path}
            className={classes.tab}
            classes={{
              selected: classes.selected,
            }}
          />
        ))}
      </Tabs>
    </Drawer>
  );
}
