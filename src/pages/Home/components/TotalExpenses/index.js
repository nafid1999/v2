import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Line } from "react-chartjs-2";
import clsx from "clsx";

import useStyles from "./style.js";
import { useTranslation } from "react-i18next";

const getData = (theme) => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "",
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
      data: [67, 59, 70, 65, 56, 80, 81],
    },
  ],
});

function LastActions() {
  const classes = useStyles();
  const theme = useTheme();
  const data = getData(theme);
  const { t } = useTranslation();

  return (
    <Card className={clsx("h-100", classes.card)}>
      <CardHeader
        title={t("Total of expenses")}
        subheader="184.45K"
        titleTypographyProps={{
          variant: "subtitle1",
          color: "primary",
        }}
        subheaderTypographyProps={{
          variant: "h6",
          color: "textPrimary",
        }}
        classes={{
          action: classes.action,
        }}
        action={
          <Typography variant="subtitle2" color="secondary">
            +1.37%
          </Typography>
        }
      />
      <CardContent className="p-0">
        <Line
          data={data}
          height={100}
          options={{
            scales: {
              yAxes: [{ display: false }],
              xAxes: [{ display: false }],
            },
            legend: { display: false },
          }}
        />
      </CardContent>
    </Card>
  );
}

export default LastActions;
