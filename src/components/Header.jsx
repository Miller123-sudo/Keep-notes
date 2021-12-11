import React from "react";
import { Link } from "react-router-dom";

import "./../App.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="title">Keep Notes</div>
        </Link>
        <Link to="/allnotes">
          <div className="title" style={{ width: "200px" }}>Deleted Notes</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
