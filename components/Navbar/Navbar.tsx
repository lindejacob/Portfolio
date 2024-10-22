import style from "./Navbar.module.css";
import { StandardButton, CircleButton, MenuButton } from "../buttons/Buttons";
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

   function Blurbackground({ isMenuOpen }: { isMenuOpen: boolean }) {
      return (
         <div
            className={`${style.backgroundBlur} ${
               isMenuOpen ? style.show : style.hide
            }`}
            onClick={handleToggleNavbar}
         />
      );
   }

   function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
      return (
         <div
            className={`${style.menuPopUp} ${
               isMenuOpen ? style.show : style.hide
            }`}
         >
            <div
               className={`${style.menu} ${
                  isMenuOpen ? style.show : style.hide
               }`}
            >
               <div className={style.menuLeft}></div>
               <div className={style.menuRight}>
                  <div>
                     <MenuButton
                        href="./"
                        onClick={handleToggleNavbar}
                        color="var(--secondary-color)"
                        fontSize="2rem"
                     >
                        Home
                     </MenuButton>
                     <MenuButton
                        onClick={handleToggleNavbar}
                        href="./#selection-id"
                        color="var(--secondary-color)"
                        fontSize="2rem"
                     >
                        Selector
                     </MenuButton>
                     <MenuButton
                        onClick={handleToggleNavbar}
                        href="./#about-id"
                        color="var(--secondary-color)"
                        fontSize="2rem"
                     >
                        About
                     </MenuButton>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   return (
      <>
         <Blurbackground isMenuOpen={isMenuOpen} />
         <nav>
            <div className={style.navbarButtonWrapper}>
               <StandardButton
                  backgroundColor="var(--highlight-color)"
                  color={"var(--secondary-color)"}
                  fontSize={"1.5rem"}
               >
                  Contact
               </StandardButton>
               <div className={style.menuWrap}>
                  <Menu isMenuOpen={isMenuOpen} />
                  <CircleButton
                     imageUrl={imgMenubars}
                     imageSize={"70%"}
                     backgroundColor={"var(--secondary-color)"}
                     onClick={handleToggleNavbar}
                  />
               </div>
            </div>
            <div className={style.navbarSocialWrapper}>
               <CircleButton
                  imageUrl={imgLinkedin}
                  imageSize={"100%"}
                  backgroundColor={"white"}
                  onClick={() => handleSocialClick("https://www.linkedin.com")}
               />
               <CircleButton
                  imageUrl={imgGithub}
                  imageSize={"80%"}
                  backgroundColor={"white"}
                  onClick={() => handleSocialClick("https://www.github.com")}
               />
            </div>
         </nav>
      </>
   );
}
