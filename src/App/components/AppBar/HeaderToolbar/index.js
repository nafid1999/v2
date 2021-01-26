import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import ArrowDropDown from "@material-ui/icons/ArrowDropDownOutlined";
import clsx from "clsx";
import { toogleMenu } from "../../../appSlice.js";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "../style.js";
import i18n from "../../../../i18n/index.js";

const dataLang = [
  {
    flag: "us",
    key: "us",
    text: "English",
  },
  {
    flag: "fr",
    key: "fr",
    text: "Français",
  },
  {
    flag: "es",
    key: "es",
    text: "Español",
  },
  {
    flag: "ma",
    key: "ar",
    text: "العربية",
  },
];

const changeLanguage = (language, setAnchorLangEl) => {
  setAnchorLangEl(null);
  i18n.changeLanguage(language);
};
export default function ({ isSticky }) {
  const classes = useStyles();
  const menuExpanded = useSelector(({ appState }) => appState.menuExpanded);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorLangEl, setAnchorLangEl] = React.useState(null);

  return (
    <AppBar
      color="inherit"
      position={"absolute"}
      className={clsx(
        classes.appBar,
        menuExpanded && classes.appBarShift,
        classes.appBarFolded
      )}
      elevation={24}
    >
      <Toolbar className={classes.toolbar}>
        <div className="align-items-center d-inline-flex">
          <IconButton
            edge="start"
            color="primary"
            aria-label="open Menu"
            className={classes.menuButton}
            onClick={() => dispatch(toogleMenu())}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="align-items-center d-inline-flex">
          <IconButton onClick={(e) => setAnchorLangEl(e.currentTarget)}>
            <Typography className={`flag-icon flag-icon-${dataLang.find(({key}) => key === i18n.language).flag} flag-icon-squared`} />
          </IconButton>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {isSticky && (
            <IconButton edge="end">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={<ArrowDropDown color="secondary" />}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </Badge>
            </IconButton>
          )}
        </div>
      </Toolbar>
      <Popover
        id={Boolean(anchorEl) ? "settings-popover" : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box p={2}>Settings</Box>
      </Popover>
      <Menu
        id="langage-menu"
        anchorEl={anchorLangEl}
        keepMounted
        open={Boolean(anchorLangEl)}
        onClose={() => setAnchorLangEl(null)}
      >
        {dataLang.map(({ flag, key, text }) => (
          <MenuItem onClick={() => changeLanguage(key, setAnchorLangEl)} selected={key === i18n.language}>
            <ListItemIcon>
              <Typography className={`flag-icon flag-icon-${flag} flag-icon-squared`} />
            </ListItemIcon>
            {text}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
