import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Components/common/NavBar/NavBar";
import links from "../Components/constance/navLinks";

export const PrivateRoute = () => {
  const isLogged = localStorage.getItem("token") ? true : false;

  if (!isLogged) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <NavBar menu={links} />
      <Outlet />
    </>
  );
};
