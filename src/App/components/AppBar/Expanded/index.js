import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import ArrowDropDown from "@material-ui/icons/ArrowDropDownOutlined";
import { useTranslation } from "react-i18next";

import HeaderToolbar from "../HeaderToolbar";
import useStyles from "./style.js";
import logo from "../../../logo.png";
import { Typography } from "@material-ui/core";
import CardHeader from "./CardHeader";

export default function () {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <HeaderToolbar />
      <Grid
        container
        className="h-100"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <img src={logo} alt="Logo" className={classes.logo} />
        </Grid>
        <Grid  item className="d-flex">
          <CardHeader title="301.650 €" content={t("Total of expenses")} />
          <CardHeader title="38" content={t("New suppliers")} />
          <CardHeader title="3.870 €" color="error" content={t("Late")} />
        </Grid>
        <Grid item className="text-center">
          <IconButton>
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
          <Typography
            variant="subtitle2"
            align="center"
            className={classes.title}
          >
            John Doe
          </Typography>
          <Typography
            variant="caption"
            align="center"
            className={classes.title}
          >
            {t("Administrator")}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
