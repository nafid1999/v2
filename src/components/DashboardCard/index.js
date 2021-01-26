import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import clsx from "clsx";
import useStyles from "./style.js";

function DashboardCard({ title, icon, className, children, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx("h-100","w-100", className)} {...rest}>
      {(title || icon) && (
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: "subtitle1",
            color: "primary",
          }}
          action={
            icon && (
              <SvgIcon
                component={icon}
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
            )
          }
        />
      )}
      <CardContent className="h-100">{children}</CardContent>
    </Card>
  );
}

export default DashboardCard;
