import React, { useState } from "react";
import Logo from "../assets/school.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Начало </Link>
          <Link to="/menu"> Меню </Link>
          <Link to="/contact"> Контакт </Link>
          <Link to="/bugreport"> Докладване на грешки </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Начало </Link>
          <Link to="/menu"> Меню</Link>
          <Link to="/contact"> Контакт </Link>
          <Link to="/bugreport"> Докладване на грешки </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
