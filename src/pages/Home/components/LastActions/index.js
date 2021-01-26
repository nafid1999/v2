import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import { useTranslation } from "react-i18next";

import useStyles from "./style.js";

const createData = (num, statut, date, color) => ({
  num,
  statut,
  date,
  color,
});

const rows = [
  createData("1005", "Invoices to be checked", "20/02/2020 14:30", "primary"),
  createData("541", "Invoices to verify", "25/01/2020 17:45", "secondary"),
  createData("457", "Invoices to verify", "05/01/2020 08:27", "secondary"),
];

function LastActions(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className="h-100" {...props}>
      <CardHeader
        title={t("Last actions")}
        titleTypographyProps={{
          variant: "subtitle1",
          color: "primary",
        }}
        classes={{
          action: classes.select,
        }}
        action={
          <Select
            value={1}
            inputProps={{
              name: "period",
              id: "period",
            }}
            classes={{
              selectMenu: classes.selectText,
            }}
          >
            <MenuItem aria-label="None" value={1}>
              {t("Today")}
            </MenuItem>
            <MenuItem value={10}>{t("Yesterday")}</MenuItem>
            <MenuItem value={20}>{t("Last week")}</MenuItem>
          </Select>
        }
      />
      <CardContent className="p-0">
        <Table aria-label="Actions Table">
          <TableHead>
            <TableRow>
              <TableCell>{t("Invoice No.")}</TableCell>
              <TableCell align="center">{t("Status")}</TableCell>
              <TableCell align="center">{t("Date")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.num}>
                <TableCell component="th" scope="row">
                  {row.num}
                </TableCell>
                <TableCell align="center">
                  <Chip label={t(row.statut)} size="small" color={row.color} />
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default LastActions;
