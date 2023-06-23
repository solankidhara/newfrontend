import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link,  useLocation } from "react-router-dom";

import classes from "./SideNav.module.css";
import "./sidenav.css";
import sidebarLinks from "../../Constance/sidebarLinks";
import SidebarDropdown from "./sidebarDropdown";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className={"mb-3 admin_sidebar " + classes.sidebar}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="sidebar_body">
              <Nav className={"justify-content-end flex-grow-1 pe-3 " + classes.body_nav} defaultActiveKey={location?.pathname}>
                {sidebarLinks.map((item, index) => (
                  <>
                    <div key={`${item.linksTitle}-${index}`}>
                      {item.linksTitle && <h3 className={classes.body_title}>{item.linksTitle}</h3>}
                      {item.links.map((link) => (
                        <>
                          {link.items && (
                            <SidebarDropdown dropdownData={link}/>   
                          )}
                          {!link.items && (
                            <Nav.Link
                              // href={location.pathname === link.redairect  ? link.redairect : "#" }
                              to={link.redairect}
                              as={Link}
                              active={location.pathname === link.redairect  ? true :false}
                              className={classes.sidebar_link}
                            >
                              {" "}
                              {link.icon} {link.title}
                            </Nav.Link>
                          )}
                        </>
                      ))}
                    </div>
                  </>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
};

export default Sidebar;



// <NavDropdown
//                               className={classes.sidebar_dropdown + " show"}
//                               title={
//                                 <span>
//                                   {link.icon} {link.title}
//                                 </span>
//                               }                           
//                               id={link.title + "-nav-dropdown"}
//                             >
//                               {link.items &&
//                                 link.items.map((i) => (
//                                   <NavDropdown.Item href={link.redairect} to={i.redairect} as={NavLink} className={classes.sidebar_link} >
//                                     {i.title}
//                                   </NavDropdown.Item>
//                                 ))}
//                             </NavDropdown>