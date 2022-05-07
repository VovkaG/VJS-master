import React from 'react';
import '../styles/option1.css';
import ObobshteniDanni from "../assets/ObobshteniDanni.png";

function option1() {
  return (
    <div>
      <h1>
      Четене и обобщаване на данните от файлове с дейности и оценки
      </h1>

      <center><img  src={ObobshteniDanni} height = "192"  width = "778"/></center>
 
    </div>
  )
}

export default option1;