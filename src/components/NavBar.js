import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#1e1f21" }}>
        <a href="#" className="brand-logo" style={{
          position: 'absolute', left: '42%', top: '65%',
          transform: 'translate(-50%, -50%)'
        }}><img src={"https://i.imgur.com/iW9mrYF.png"}
          alt=""
          style={{height: "55px" }} /></a>
        <Link to="/" className="brand-logo" style={{
            color: 'white',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          Book Finder</Link>

      </div>
    </nav>
  );
}

export default Navbar;