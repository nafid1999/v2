import React from "react";
import get from "lodash/get";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Line } from "react-chartjs-2";
import clsx from "clsx";

import useStyles from "./style.js";

const getData = (color, data) => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "",
      fill: true,
      lineTension: 0.1,
      backgroundColor: fade(color, 0.1),
      borderColor: color,
      pointBorderColor: color,
      pointBackgroundColor: "#FFFFFF",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: color,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data,
    },
  ],
});

function ChartCard({title, subtitle, variation, data, color}) {
  const classes = useStyles();
  const theme = useTheme();
  const chartData = getData(get(theme,`palette.${color}`), data);

  return (
    <Card className={clsx("h-100", classes.card)}>
      <CardHeader
        title={title}
        subheader={subtitle}
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
            {variation}
          </Typography>
        }
      />
      <CardContent className="p-0">
        <Line
          data={chartData}
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

export default ChartCard;
