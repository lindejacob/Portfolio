import React, { useState } from "react";
import style from "./navbar.module.css";
import { FilledButton, CircleButton } from "../button/button.js";

// Import img
import menubars from "../../img/menubars.svg";
import imgGithub from "../../img/githubLogo.png";
import imgLinkedin from "../../img/linkedinLogo.png";

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

   const socialLink = name => {
      switch (name) {
         case "github":
            window.location.href = "https://github.com/lindejacob";
            break;

         case "linkedin":
            window.location.href =
               "https://www.linkedin.com/in/jacob-m%C3%B8lholt-poulsen-24572b290/";

            break;
         default:
            break;
      }
   };
   return (
      <div>
         <MenuPopUp isShown={isMenuShown} onClick={toggleMenu} />{" "}
         <div className={style.navbar}>
            <div className={style.social}>
               <CircleButton
                  imageUrl={imgGithub}
                  backgroundColor={"white"}
                  imageSize={"80%"}
                  onClick={() => socialLink("github")}
               />
               <CircleButton
                  imageUrl={imgLinkedin}
                  backgroundColor={"white"}
                  imageSize={"100%"}
                  onClick={() => socialLink("linkedin")}
               />
            </div>
            <div className={style.buttons}>
               <CircleButton
                  imageSize={"70%"}
                  imageUrl={menubars}
                  backgroundColor={"#252423"}
                  size={"3rem"}
                  onClick={toggleMenu}
               />
               <FilledButton
                  color={"#FFF"}
                  fontSize={"2rem"}
                  backgroundColor={"#FF6331"}
               >
                  Contact
               </FilledButton>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
