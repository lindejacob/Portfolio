import style from "./Navbar.module.css";
import { StandardButton, CircleButton } from "../buttons/Buttons";
import React, { useState } from "react";

import imgMenubars from "../../assets/menubars.svg";
import imgGithub from "../../assets/githubLogo.png";
import imgLinkedin from "../../assets/linkedinLogo.png";

export function Navbar() {
   function handleSocialClick(url: string) {
      window.location.href = url;
   }

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
                  imageSize="70%"
                  backgroundColor="white"
                  onClick={() =>
                     handleSocialClick("https://github.com/lindejacob")
                  }
               />
               <CircleButton
                  imageUrl={imgLinkedin}
                  imageSize="100%"
                  backgroundColor="white"
                  onClick={() =>
                     handleSocialClick(
                        "https://www.linkedin.com/in/jacob-m%C3%B8lholt-poulsen-24572b290/"
                     )
                  }
               />
            </div>
            <div className={style.buttonContainer}>
               <StandardButton
                  backgroundColor="var(--highlight-color)"
                  color="var(--secondary-color)"
                  fontSize="1.5rem"
               >
                  Contact
               </StandardButton>
               <CircleButton
                  imageUrl={imgMenubars}
                  imageSize="70%"
                  backgroundColor="var(--secondary-color)"
                  onClick={handleToggleNavbar}
               />
            </div>
         </div>
      </>
   );
}
