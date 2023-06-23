import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteForAdmin = () => {
  const isLogged = localStorage.getItem("token") ? true : false;

  if (!isLogged) {
    console.log("isLogged",isLogged);
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};