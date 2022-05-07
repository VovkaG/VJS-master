import React from 'react';
import CTImg from "../assets/centrTend.png";
import '../styles/option3.css';

function option3() {

  class CentralnaTendenciq {
    constructor(centrTend) {
      this.centrTend = centrTend;
    }
    CentralnaTend() {
      this.centrTend = 'Мерки на централната тенденция: ';
      return this.centrTend;
    }
  }
  
  class Moda extends CentralnaTendenciq {
    constructor(centrTend, moda) {
      super(centrTend);
      this.moda = moda;
    }
    get moda() {
      return this.centrTend + 'Мода-' + this.calcModa();
    }

    calcModa() {
      var mode = 0;
      var count = 0;
      var arr = [];
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[j] === arr[i]) {
            mode = arr[j];
            count++;
            console.log(count);
          }
        }
      }
      return mode;
    }
  }

  class Mediana extends CentralnaTendenciq {
    constructor(centrTend, mediana) {
      super(centrTend);
      this.mediana = mediana;
    }
    get mediana() {
      return this.centrTend + 'Медиана-' + this.calcMediana();
    }

    calcMediana() {
      const mediana = arr => {
        const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      };
      return mediana;
    }
  }

  class Sredna extends CentralnaTendenciq {
    constructor(centrTend, sredna) {
      super(centrTend);
      this.sredna = sredna;
    }
    get sredna() {
      return this.centrTend + 'Средна-' + this.calcSredna();
    }

    calcSredna() {
      const sredna = (array) => array.reduce((a, b) => a + b) / array.length;
      return sredna;
    }
  }

  


  return (
    <div>

      <h1>
        Определяне на мерки на централната тенденция за изпълнени и качени курсови задачи и проекти
      </h1>
      <h4>Използваните мерки на централната тенденция са: средна, медиана, мода.</h4>

      
      <img className='CTImg' src={CTImg} />

    </div>
  )
}

export default option3;