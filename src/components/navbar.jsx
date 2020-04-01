import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://Kennz0r.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
