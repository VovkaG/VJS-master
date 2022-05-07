import React from 'react'
import ChUnWiki from "../assets/ChestotnoUnikalnoWiki.png";
import ChWiki from "../assets/ChestotnoWiki.png";
import ChartUnWiki from "../assets/ChartUnikalniWiki.png"
import ChartWiki from "../assets/ChartWiki.png"
import '../styles/option5.css';

function option5() {
  return (
    <div>
      <h1>
      Корелационен анализ на брой редактирани Wiki
      </h1>
      <h2>
        Честотна таблица на брой редактирани уникални Wiki
      </h2>
      <center><img  src={ChUnWiki} height = "207"  width = "1097"/></center>
      <h2>
        Отношение между резултат и брой редактирани уникални Wiki
      </h2>
      <center><img  src={ChartUnWiki} height = "617"  width = "1154"/></center>

      <h2>
      Коефициент на обикновена линейна корелация на Пирсън (r)
      </h2>
      <h1>
      0.256786691
      </h1>
      <h3>
             Коефициентът на корелация е положителен и възходящ, но зависимостта е слаба 
      </h3>

      <h2>
        Честотна таблица на общ брой (не уникални) редактирани Wiki
      </h2>
      <center><img  src={ChWiki} height = "404"  width = "1101"/></center>
      <h2>
        Отношение между резултат и общ брой редактирани  Wiki
      </h2>
      <center><img  src={ChartWiki} height = "653"  width = "1168"/></center>

      <h2>
      Коефициент на обикновена линейна корелация на Пирсън (r)
      </h2>
      <h1>
      0.195357293

      </h1>
      <h3>
             Коефициентът на корелация е положителен и възходящ, но зависимостта е слаба 
      </h3>


    </div>
  )
}

export default option5