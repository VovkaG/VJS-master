import React from 'react';
import "../styles/BugReport2.css";
import bugReportImg from "../assets/BugImage.png";

function BugReport2() {
  return (
    <div>
      <h1>
      Благодарим за докладването!
     
      </h1>

      <img className='bugReportImg' class="center" src={bugReportImg} />
      <h4><marquee behavior="scroll" direction="left" scrollamount = "10">Екипа на VJS ви пожелава приятна работа!</marquee></h4>
    </div>
  )
}

export default BugReport2;