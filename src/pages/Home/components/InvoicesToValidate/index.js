/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from "@material-ui/core/IconButton";
import MoreVertOutlined from "@material-ui/icons/MoreVertOutlined";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import TabActions from "./TabActions";
import useStyles from "./style.js";
import isEmpty from "lodash/isEmpty";
import { fetchInvoices } from "../../../../redux/actions/invoices/index";



function InvoicesToValidate({ invoices, fetchInvoices, isDashboard }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedId, setSelectedId] = React.useState(0);


  const handlePopOverActionClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const open = Boolean(anchorEl);
  useEffect(() => {
    const filter = { invoiceNoOrSupplierCode: '', status: ['TO_VERIFY'], startDate: null, endDate: null, pageNo: 0, pageSize: 5 }
    isDashboard ?
      fetchInvoices(filter, 'issueDate') : fetchInvoices();
  }, []);
  return (
    <Card fullwidth className={classes.cardTable} elevation={0}>
      <CardHeader
        classes={{
          action: classes.select,
        }}
        action={
          isDashboard && <Button color="secondary" className={classes.underlineText}>
            {t("Show all")}
          </Button>
        }
        title={<Typography
          variant="h6"
          color="secondary"
          gutterBottom
        >
          {t("Total amount of invoices")}
        </Typography>}
        subheader={<Typography
          variant="subtitle2"
          color="textSecondary"
          gutterBottom
        >
          {t("countInvoices")} {isDashboard ? t("tobeprocessed") : ''} {invoices ? "= " + invoices.length : "= ..."}
        </Typography>}
      />
      <CardContent className="p-0">
        <Table aria-label="Actions Table" classes={{ root: classes.table }}>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableRowHead }}>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Indentifiant")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Supplier")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Invoice No.")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Release date")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Due date")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Price WT")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Taxe Rate")} (%)
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Price")}
              </TableCell>
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Purchase order")}
              </TableCell>
              {!isDashboard && <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              >
                {t("Status")}
              </TableCell>}
              <TableCell
                align="center"
                classes={{ root: classes.tableCellHead }}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices && !isEmpty(invoices) && invoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                hover
                key={row.num}
                classes={{ root: classes.tableRow }}
                value={row}
              >
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.id}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  classes={{ root: classes.tableCell }}
                >
                  <div className="d-flex align-items-center">
                    <Avatar
                      alt={row.nom}
                      src={row.avatar}
                      className={classes.avatar}
                    />
                    {row.supplier ? row.supplier.label : "--------"}
                  </div>
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  <Typography color="primary" variant="body2">
                    {row.invoiceNo}
                  </Typography>
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.issueDate}
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.dueDate}
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.totalHT}
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.vat}
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.total}
                </TableCell>
                <TableCell align="center" classes={{ root: classes.tableCell }}>
                  <Typography color="secondary" variant="body2">
                    {row.bonCommande}
                  </Typography>
                </TableCell>
                {!isDashboard && <TableCell align="center" classes={{ root: classes.tableCell }}>
                  {row.status && row.status.label}
                </TableCell>}
                <TableCell align="center" classes={{ root: classes.tableCell }} >
                  <IconButton edge="end" aria-label="view" onClick={(event) => {
                    setSelectedId(row.id); setAnchorEl(event.currentTarget);
                  }} aria-describedby={open ? 'popover-actions'.concat(invoices.indexOf(row)) : undefined}>
                    <MoreVertOutlined />
                  </IconButton>
                  <TabActions deletable={row.status && row.status.code === "TO_VERIFY"} idInvoice={selectedId} handleClose={handlePopOverActionClose} anchorEl={anchorEl} open={open} id={open ? 'popover-actions'.concat(invoices.indexOf(row)) : undefined} />

                  {/* <IconButton edge="end" aria-label="view" className={classes.downloadIcon}>
                    <GetAppOutlined />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="view"
                    color="inherit"
                    className={classes.deleteIcon}
                  >
                    <DeleteOutlined />
                  </IconButton> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={invoices && invoices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}
const mapStateToProps = state => {
  const dataQueris = state.requests.queries;
  return ({
    invoices: dataQueris.LIST_FETCH_INVOICE && dataQueris.LIST_FETCH_INVOICE.data && dataQueris.LIST_FETCH_INVOICE.data.content
  })
};
export default connect(mapStateToProps, { fetchInvoices })(InvoicesToValidate);
