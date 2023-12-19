import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";

function checkAuth() {
  // Get the access token from storage (e.g., localStorage)
  const token = localStorage.getItem('token');

  // Check if token exists
  if (!token) {
    return false; // Not logged in
  }

  // Decode the token (optional)
  // You can use a library like JWT-decode to achieve this
  // const decodedToken = jwtDecode(token);

  // Check if token is expired (if JWT or similar token)
  // This check assumes the token has an "exp" claim containing the expiry timestamp
  // if (decodedToken && decodedToken.exp < Date.now() / 1000) {
  //   return false; // Token expired
  // }

  // If token exists and is not expired, consider it valid
  return true;
}


// App component
function App() {
  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    checkAuth() ? PrivateRoute() : {},
    ...PublicRoute(),
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
}

export default App;