import React, { useState } from "react";
import style from "./navbar.module.css";
import { FilledButton, CircleButton } from "../button/button.js";

// Import img
import menubars from "../../img/menubars.svg";

const MenuPopUp = ({ isShown, onClick }) => {
   return (
      <div
         className={`${style.menuPopUp} ${isShown ? style.show : style.hide}`}
         onClick={onClick}
      >
         <div className={style.background}></div>
      </div>
   );
};

const Navbar = () => {
   const [isMenuShown, setIsMenuShown] = useState(false);

   const toggleMenu = () => {
      setIsMenuShown(!isMenuShown);
   };

   return (
      <div>
         <MenuPopUp isShown={isMenuShown} onClick={toggleMenu} />{" "}
         <div className={style.navbar}>
            <CircleButton
               imageSize={"70%"}
               imageUrl={menubars}
               color={"#252423"}
               size={"3rem"}
               onClick={toggleMenu}
            />
            <FilledButton
               text="Contact"
               textColor={"#FFF"}
               fontSize={"2rem"}
               color={"#FF6331"}
            />
         </div>
      </div>
   );
};

export default Navbar;
