import React from "react";

import "./../App.css";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div>
      <p className="footer">Copyright © {year}</p>
    </div>
  );
};

export default Footer;
