import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles, useTheme } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useTranslation } from "react-i18next";

import useStyles from "./style.js";

const getData = (theme, t) => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: t("Paid invoices"),
      fill: true,
      lineTension: 0.1,
      backgroundColor: fade(theme.custom.color.color3, 0.1),
      borderColor: theme.custom.color.color3,
      pointBorderColor: theme.custom.color.color3,
      pointBackgroundColor: "#FFFFFF",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: theme.custom.color.color3,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [35, 59, 70, 65, 56, 80, 81],
    },
    {
      label: t("Unpaid invoices"),
      fill: true,
      lineTension: 0.1,
      backgroundColor: fade(theme.custom.color.color2, 0.3),
      borderColor: theme.custom.color.color2,
      pointBorderColor: theme.custom.color.color2,
      pointBackgroundColor: "#FFFFFF",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: theme.custom.color.color2,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [15, 20, 48, 52, 50, 45, 42],
    },
  ],
});

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    minWidth: 0,
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);

function Statistics() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();
  const data = getData(theme, t);
  
  return (
    <Card className="h-100">
      <CardHeader
        title={t("Statistical overview of purchases")}
        // subheader={t("Statistical overview of product sales")}
        titleTypographyProps={{
          variant: "subtitle1",
          color: "primary",
        }}
        classes={{
          action: classes.select,
        }}
        action={
          <StyledTabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
          >
            <StyledTab label="1D" />
            <StyledTab label="2D" />
            <StyledTab label="1M" />
            <StyledTab label="1Y" />
            <StyledTab label="Max" />
          </StyledTabs>
        }
      />
      <CardContent>
        <Line
          data={data}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

export default Statistics;
