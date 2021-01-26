import React from "react";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import InsertDriveFileOutlined from "@material-ui/icons/InsertDriveFileOutlined";
import AssessmentOutlined from "@material-ui/icons/AssessmentOutlined";

import Home from "../pages/Home";
import Novy from "../pages/Novy";
import Home3 from "../pages/Home3";
import List from "../pages/Invoices/List";

export default [
  {
    name: "Dashboard",
    path: "/",
    component: () => <Home />,
    icon: <DashboardIcon />,
  },
  {
    name: "Orders",
    path: "/orders",
    component: () => <Home3 />,
    icon: <ShoppingCartOutlined />,
  },
  {
    name: "Invoices",
    path: "/invoices",
    component: () => <List />,
    icon: <InsertDriveFileOutlined />,
  },
  {
    name: "Regulations",
    path: "/regulations",
    component: () => <Novy />,
    icon: <AssessmentOutlined />,
  },
  {
    name: "Suppliers",
    path: "/suppliers",
    component: () => <div>Fournisseurs</div>,
    icon: <PeopleIcon />,
  },
  {
    name: "Rapports",
    path: "/reports",
    component: () => <div>Rapports</div>,
    icon: <BarChartIcon />,
  },
];
