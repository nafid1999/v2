import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import { Doughnut } from "react-chartjs-2";
import VisibilityOutlined from "@material-ui/icons/VisibilityOutlined";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheckOutlined";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { fetchInvoices } from "../../../../redux/actions/invoices/index";

import DashboardCard from "../../../../components/DashboardCard/index.js";

import useStyles from "./style.js";



function MyTasks(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  useEffect(() => {
    fetchInvoices();
  }, []);
  const getData = (theme, t) => ({
    labels: [t("Invoices to verify"), t("Invoices to be checked"), t("Invoices to Payers")],
    datasets: [
      {
        data: [props.invoices ? props.invoices.length : 0, 35, 7],
        backgroundColor: [
          theme.custom.color.color1,
          theme.custom.color.color2,
          theme.custom.color.color3,
        ],
      },
    ],
  });
  const data = getData(theme, t);

  return (
    <DashboardCard
      title={t("My tasks")}
      icon={PlaylistAddCheck}
      className={classes.card}
      {...props}
    >
      <Doughnut
        data={data}
        width={500}
        options={{ legend: { display: false } }}
      />
      <List>
        {data.labels.map((label, index) => (
          <ListItem key={index} className={clsx(!(index % 2) && classes.bgLight)}>
            <ListItemText
              primary={data.datasets[0].data[index]}
              secondary={label}
              secondaryTypographyProps={{
                variant: "subtitle1"
              }}
              style={{ color: data.datasets[0].backgroundColor[index] }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="view">
                <VisibilityOutlined />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
}

const mapStateToProps = state => {
  const dataQueris = state.requests.queries;
  return ({
    invoices: dataQueris.LIST_FETCH_INVOICE && dataQueris.LIST_FETCH_INVOICE.data && dataQueris.LIST_FETCH_INVOICE.data.content
  })
};
export default connect(mapStateToProps, { fetchInvoices })(MyTasks);;
