import React, { useState, useRef, useEffect } from "react";
import style from "./navbar.module.css";
import { FilledButton, CircleButton, MenuButton } from "../button/button.js";

// Import img
import menubars from "../../img/menubars.svg";
import imgGithub from "../../img/githubLogo.png";
import imgLinkedin from "../../img/linkedinLogo.png";

const MenuPopUp = ({ isShown, onClose }) => {
   const menuRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = event => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            onClose();
         }
      };

      if (isShown) {
         document.addEventListener("mousedown", handleClickOutside);
      } else {
         document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isShown, onClose]);

   return (
      <div
         className={`${style.menuPopUp} ${isShown ? style.show : style.hide}`}
      >
         <div className={style.menu} ref={menuRef}>
            <div className={style.menuLeft}></div>
            <div className={style.menuRight}>
               <div>
                  <MenuButton fontSize={"2rem"} onClick={onClose}>
                     Hello
                  </MenuButton>
                  <MenuButton fontSize={"2rem"} onClick={onClose}>
                     Hello
                  </MenuButton>
                  <MenuButton fontSize={"2rem"} onClick={onClose}>
                     Hello
                  </MenuButton>
                  <MenuButton fontSize={"2rem"} onClick={onClose}>
                     Hello
                  </MenuButton>
               </div>
            </div>
         </div>
         <div className={style.background}></div>
      </div>
   );
};

const Navbar = () => {
   const [isMenuShown, setIsMenuShown] = useState(false);

   const toggleMenu = () => {
      setIsMenuShown(!isMenuShown);
   };

   const closeMenu = () => {
      setIsMenuShown(false);
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
         <MenuPopUp isShown={isMenuShown} onClose={closeMenu} />
         <div className={style.navbar}>
            <div className={style.social}>
               <div>
                  <div>
                     <CircleButton
                        imageUrl={imgGithub}
                        backgroundColor={"white"}
                        imageSize={"80%"}
                        onClick={() => socialLink("github")}
                     />
                  </div>
                  <p>Github</p>
               </div>
               <div>
                  <div>
                     <CircleButton
                        imageUrl={imgLinkedin}
                        backgroundColor={"white"}
                        imageSize={"100%"}
                        onClick={() => socialLink("linkedin")}
                     />
                  </div>
                  <p>linkedin</p>
               </div>
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
