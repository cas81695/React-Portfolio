import React from "react";
import { Link} from "react-router-dom";

import "./Navbar.css";

function Navbar(){
 
const handleToggle=  () => {
    var x = document.getElementById("navFixed");
    if (x.className.indexOf("show") === -1 && x.className.indexOf("hide-small") === 0) {
        x.className = x.className.replace("hide-small", " show");
    } else {
        x.className = x.className.replace(" show", "hide-small");
    }
}
  return(
    <>
    <div className="nav-top">
      <div id="navbar">
        <button id ="navLink" className="button hide-md-lg" onClick={handleToggle} title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </button>
        <Link to="/" className="navbar-item button">HOME</Link>
        <Link to="/about" className="navbar-item button hide-small"><i className="fa fa-male"></i> ABOUT</Link>
        <Link to="/portfolio" className="navbar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</Link>
        <Link to="/contact" className="navbar-item button hide-small"><i className="fa fa-address-card"></i> CONTACT</Link>
      </div>

      {/*  Navbar Small */}
      <div id="navFixed" className="hide-small hide-large hide-medium" onClick={handleToggle}>
        <Link to="/about" className="navbar-item small button">ABOUT</Link>
        <Link to="/portfolio" className="navbar-item small button" >PORTFOLIO</Link>
        <Link to="/contact" className="navbar-item  small button" >CONTACT</Link> 
      </div>
    </div>
    </>

  )
}

export default Navbar;