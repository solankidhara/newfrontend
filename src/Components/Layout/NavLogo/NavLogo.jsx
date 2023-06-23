import { Link } from "react-router-dom";

const NavLogo = () => {
      return (
            <Link to="/" className='py-2'>
                  <img alt="logo" src="/images/logo.jpg" className="inline-block align-top" width="247px" height="42px"/>
            </Link>
      );
};

export default NavLogo;
