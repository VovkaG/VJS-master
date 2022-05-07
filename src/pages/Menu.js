import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menuList">
      <div className="options">
        
      <Link to="/option1"> <h1 className="menuItem">
      Четене и обобщаване на данните от файлове с дейности и оценки
      </h1></Link>
      <Link to="/option2"> <h1 className="menuItem">
      Честотно разпределение на изпълнени и качени курсови задачи и проекти 
      </h1></Link>
      <Link to="/option3"> <h1 className="menuItem">
      Определяне на мерки на централната тенденция за изпълнени и качени курсови задачи и проекти 
      </h1></Link>
      <Link to="/option4"> <h1 className="menuItem">
          Мерки на разсейване за изпълнени и качени курсови задачи и проекти 
        </h1></Link>
      <Link to="/option5"> <h1 className="menuItem">
      Корелационен анализ на брой редактирани Wiki
      </h1></Link>
      <Link to="/option6"> <h1 className="menuItem">
      Информация за успеха на учениците
      </h1></Link>
        
        </div>
      </div>

        

    </div>
  );
}

export default Menu;
