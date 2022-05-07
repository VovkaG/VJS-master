import React from 'react';
import chestotnaImg from "../assets/chestotnoRazpr.jpg";
import '../styles/option2.css';

function option2() {


  class ChestotnoRazpredelenie {
    constructor(chestotnoRazpredelenie) {
      this.chestotnoRazpredelenie = chestotnoRazpredelenie;
    }
    get chestotnoRazpredelenie(){
      return this.chestotnoRazpredelenie;
    }
    calculateMean(values){
      const mean = (values.reduce((sum, current) => sum + current)) / values.length;
      return mean;
  }
  }
  
  class Razmah extends ChestotnoRazpredelenie {
    constructor(chestotnoRazpredelenie, razmah) {
      super(chestotnoRazpredelenie);
      this.razmah = razmah;
    }
    get razmah() {
      return this.razmah;
    }

    calcRazmah() {
      const calculateRazmah = (max,min) => {
        return max-min;
    };
    }
  }

  class Dispersiq extends ChestotnoRazpredelenie {
    constructor(chestotnoRazpredelenie, dispersiq) {
      super(chestotnoRazpredelenie);
      this.dispersiq = dispersiq;
    }
    get dispersiq() {
      return this.dispersiq;
    }

    calcDispersiq() {
      const calculateSD = (variance) => {
        return Math.sqrt(variance);
    };
    }
  }

  class Otklonenie extends ChestotnoRazpredelenie {
    constructor(chestotnoRazpredelenie, otklonenie) {
      super(chestotnoRazpredelenie);
      this.otklonenie = otklonenie;
    }
    get otklonenie() {
      return this.otklonenie;
    }

    calcOtklonenie() {
      const calculateVariance = (values) => {
        const average = this.calculateMean(values);
        const squareDiffs = values.map((value) => {
            const diff = value - average;
            return diff * diff;
        });
        const variance = this.calculateMean(squareDiffs);
        return variance;
    }
  }
}
 


  return (
    <div>

      <h1>
        Честотно разпределение на изпълнени и качени курсови задачи и проекти
      </h1>

      <img className='chestotnaImg' src={chestotnaImg} />


    </div>
  )
}


export default option2;