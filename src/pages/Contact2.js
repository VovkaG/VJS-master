import React from 'react';
import "../styles/Contact2.css";
import email from "../assets/email.png";

function Contact2() {
  return (
    <div>
      <h1>
        Благодарим за съобщението!
      </h1>
      <img className='email' class="center" src={email} />
      <h4><marquee behavior="scroll" direction="left" scrollamount = "10">Екипа на VJS ви пожелава приятна работа!</marquee></h4>
    </div>
  )
}

export default Contact2;