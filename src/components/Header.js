import React, { useState } from "react";


import { FiList, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path=window.location.pathname
  return (
    <div className="header">
      {showHeader ? (
        <FiX
          onClick={() => { setShowHeader(!showHeader)}}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <FiList
          onClick={() => {setShowHeader(!showHeader)}}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}
      <ul className={`${showHeader ? 'Show-header' : 'hide-header'} n-box1`}>
      
        <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
        <li  className={`${path=='/Projects' && 'active'}`}><Link to='/Projects'>Projects</Link></li>
        <li className={`${path=='/Education' && 'active'}`}><Link to='/Education'>Education/Contact</Link></li>
        {/* <li className={`${path=='/Contact' && 'active'}`}><Link to='/Contact'>Contact</Link></li> */}
      </ul>
    </div>
    
  );
}
export default Header;
