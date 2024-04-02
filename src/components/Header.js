import React, { useState } from "react";

import { FiList, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;
  return (
    <div className="header">
      {showHeader ? (
        <FiX
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <FiList
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}
      <ul className={`${showHeader ? "Show-header" : "hide-header"} n-box1`}>
        <li className={`${path === "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${path === "/ExperienceProjects" && "active"}`}>
          <Link to="/ExperienceProjects">Experience/Projects</Link>
        </li>
        <li className={`${path === "/EducationContact" && "active"}`}>
          <Link to="/EducationContact">Education/Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
