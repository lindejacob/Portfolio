import style from "./Navbar.module.css";
import { StandardButton, CircleButton, MenuButton } from "../buttons/Buttons";
import React, { useState } from "react";

import imgGithub from "../../assets/githubLogo.png";
import imgLinkedin from "../../assets/linkedinLogo.png";
import { List } from "react-bootstrap-icons";
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
                  <CircleButton
                     backgroundColor={"var(--secondary-color)"}
                     onClick={handleToggleNavbar}
                  >
                     <List size={"2.5em"} color={"var(--primary-color)"} />
                  </CircleButton>
               </div>
            </div>
            <div className={style.navbarSocialWrapper}>
               <CircleButton
                  imageUrl={imgLinkedin}
                  backgroundColor={"white"}
                  onClick={() => handleSocialClick("https://www.linkedin.com")}
               />
               <CircleButton
                  imageUrl={imgGithub}
                  backgroundColor={"white"}
                  onClick={() => handleSocialClick("https://www.github.com")}
               />
            </div>
         </nav>
      </>
   );
}
