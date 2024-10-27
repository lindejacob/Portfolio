import styles from "./Navbar.module.css";
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
            className={`${styles.backgroundBlur} ${
               isMenuOpen ? styles.show : styles.hide
            }`}
            onClick={handleToggleNavbar}
         />
      );
   }

   return (
      <>
         <Blurbackground isMenuOpen={isMenuOpen} />
         <nav>
            <div className={styles.rightNavbar}>
               <CircleButton
                  backgroundColor={"var(--secondary-color)"}
                  onClick={handleToggleNavbar}
               >
                  <List color={"var(--primary-color)"} size={"2.2rem"} />
               </CircleButton>
               <StandardButton
                  color={"var(--secondary-color)"}
                  fontSize={"1.5rem"}
                  backgroundColor={"var(--highlight-color)"}
               >
                  {"Contact"}
               </StandardButton>
            </div>
            <div className={styles.leftNavbar}></div>
         </nav>
      </>
   );
}
