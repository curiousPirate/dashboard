import { Navigate } from "react-router-dom";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";

export default function routes() {
  return [
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" replace /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/reset-password/:username:token", element: <ResetPassword /> },
    { path: "/forgot-password", element: <ForgotPassword /> }
  ];
}