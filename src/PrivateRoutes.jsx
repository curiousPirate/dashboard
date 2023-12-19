import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const Dashboard = lazy(
  () => import("./Dashboard")
);

export default function privateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}