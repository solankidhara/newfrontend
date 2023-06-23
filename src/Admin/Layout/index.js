import axios from "axios";
import {  useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

import classes from "./layout.module.css";
import Sidebar from "./SideNav";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  (async () => {
    const { data } = await axios.get("/users/me");
    if (data.role === "admin") {
      return setIsAdmin(false);
    }
    return setIsAdmin(true);
  })();


  if (isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Row className={"g-0 " + classes.admin_body}>
        <Col lg={2} md={3}>
          <Sidebar />
        </Col>
        <Col lg={10} md={9} className="px-5 py-2">
          <DashboardHeader greet="Good Morning" uname="Mr. ABCD" userDp="/images/admin/adminDp.png" />
          <div className={classes.layout_body}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Admin;
