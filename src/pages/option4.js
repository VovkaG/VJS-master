import React from 'react';
import MRImg from "../assets/merkiNaRazseivaneto.png";
import '../styles/option4.css';

function option4() {
  
  class MerkiNaRazseivane {
    constructor(merkiRazseivane) {
      this.merkiRazseivane = merkiRazseivane;
    }
    MerkiNaRazseivane() {
      this.merkiRazseivane = 'Мерки на разсейване: ';
      return this.merkiRazseivane;
    }
    calculateMean(values){
      const mean = (values.reduce((sum, current) => sum + current)) / values.length;
      return mean;
  }
  }
  
  class Razmah extends MerkiNaRazseivane {
    constructor(merkiRazseivane, razmah) {
      super(merkiRazseivane);
      this.razmah = razmah;
    }
    get razmah() {
      return this.merkiRazseivane + 'Размах-' + this.calcRazmah();
    }

    calcRazmah() {
      const calculateRazmah = (max,min) => {
        return max-min;
    };
    }
  }

  class Dispersiq extends MerkiNaRazseivane {
    constructor(merkiRazseivane, dispersiq) {
      super(merkiRazseivane);
      this.dispersiq = dispersiq;
    }
    get dispersiq() {
      return this.merkiRazseivane + 'Дисперсия-' + this.calcDispersiq();
    }

    calcDispersiq() {
      const calculateSD = (variance) => {
        return Math.sqrt(variance);
    };
    }
  }

  class Otklonenie extends MerkiNaRazseivane {
    constructor(merkiRazseivane, otklonenie) {
      super(merkiRazseivane);
      this.otklonenie = otklonenie;
    }
    get otklonenie() {
      return this.merkiRazseivane + 'Отклонение-' + this.calcOtklonenie();
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
      Мерки на разсейване за изпълнени и качени курсови задачи и проекти 
      </h1>

      <h4>Най-често използваните мерки на разсейването са: размах, дисперсия и стандартно отклонение.</h4>

      
      <img className='MRImg' src={MRImg} />

    </div>
  )
}


export default option4;