import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

function BugRep() {
  return (
    <div className="contact">
    
      <div className="rightSide">
        <h1> Докладвай за грешка </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Име</label>
          <input name="name" placeholder="Въведи името си..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Въведи email адрес..." type="email" />
          <label htmlFor="message">Какво не е наред ?</label>
          <textarea
            rows="6"
            placeholder="..."
            name="message"
            required
          ></textarea>
          <Link to="/BugReport2"><button type="submit"> Докладвай  </button></Link>
        </form>
      </div>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
    </div>
  );
}

export default BugRep;