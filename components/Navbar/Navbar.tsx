import style from "./Navbar.module.css";
import { StandardButton, CircleButton } from "../buttons/Buttons";
import React, { useState } from "react";

import imgMenubars from "../../assets/menubars.svg";
import imgGithub from "../../assets/githubLogo.png";
import imgLinkedin from "../../assets/linkedinLogo.png";

export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   function handleToggleNavbar() {
      setIsMenuOpen(!isMenuOpen);
   }

   function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
      return (
         <div
            className={`${style.menuPopUp} ${
               isMenuOpen ? style.show : style.hide
            }`}
         >
            <div className={style.menu}>
               <div className={style.menuLeft}></div>
               <div className={style.menuRight}></div>
            </div>
         </div>
      );
   }

   return (
      <>
         <Menu isMenuOpen={isMenuOpen} />
         <div className={style.navbar}>
            <div className={style.socialContainer}>
               <CircleButton
                  imageUrl={imgGithub}
                  imageSize="24px"
                  backgroundColor="#000"
               />
               <CircleButton
                  imageUrl={imgLinkedin}
                  imageSize="24px"
                  backgroundColor="#0077B5"
               />
            </div>
            <div className={style.buttonContainer}>
               <StandardButton color="#000" fontSize="16px">
                  Contact
               </StandardButton>
               <CircleButton
                  imageUrl={imgMenubars}
                  imageSize="24px"
                  backgroundColor="#fff"
                  onClick={handleToggleNavbar}
               />
            </div>
         </div>
      </>
   );
}
