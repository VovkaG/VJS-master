import React from "react";
import leftImg from "../assets/analyze.png";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${leftImg})` }}
      ></div>
      <div className="rightSide">
        <h1> Свържи се с нас </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Име</label>
          <input name="name" placeholder="Въведи името си..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Въведи email адрес..." type="email" />
          <label htmlFor="message">Съобщение</label>
          <textarea
            rows="6"
            placeholder="Въведи съобщение..."
            name="message"
            required
          ></textarea>
          <Link to="/Contact2"><button type="submit"> Изпрати  </button></Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;