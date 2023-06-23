import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import NavLinks from "../../Layout/NavLinks/NavLinks";
import NavLogo from "../../Layout/NavLogo/NavLogo";
import "./NavBar.css";

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "mos_navbar-sticky" : "" + " p-0"}
    >
      <div className="container-fluid">
        <NavLogo />
        <NavLinks menu={props.menu} />
      </div>
    </Navbar>
  );
};

export default NavBar;
