import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import { lazy } from "react";

// Lazy loaded components
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));



// Function to check authentication
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Check if token exists
};

// Private routes definition
const privateRoutes = () => {
  return {
    element: isAuthenticated() ? <Layout /> : <Navigate to="/login" />,
    children: [{ path: '/layout', element: <Layout /> }],
  };
};

// Public routes definition
const publicRoutes = () => {
  return [
    { path: "/", element: <Login /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/reset-password", element: <ResetPassword /> },
  ];
};

function App() {
  const router = createBrowserRouter([...publicRoutes(), privateRoutes()]);

  return <RouterProvider router={router} />;
}

export default App;
