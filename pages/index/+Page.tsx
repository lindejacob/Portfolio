import styles from "./index.module.css";

import { CircleButton, SquareButton } from "../../components/buttons/Buttons";
import {
   CircleZoom,
   DarkenScreen,
} from "../../components/circleScrollTransition/CircleScrollTransition";
import CardSlider from "../../components/cardSlider/CardSlider";
import { Card } from "../../components/card/Card";
import { SkillBox } from "../../components/skills/Skills";

import fabledCard from "../../assets/fabledCard.svg";
import FightorDieCard from "../../assets/FightorDieCard.png";
import curlyHighlightArrow from "../../assets/curlyHighlightArrow.svg";
import profilePicture from "../../assets/TempPic.png";
import { MailCopy } from "../../components/mailCopy/MailCopy";
import { ArrowDown } from "react-bootstrap-icons";

export default function Page() {
   return (
      <main>
         <section className={styles.startSection}>
            <div className={styles.titleContainer}>
               <h1>Jacob Mølholt Poulsen</h1>
               <h2>Studying software engineering</h2>
            </div>
            <div className={styles.scrollBtnContainer}>
               <p>Scroll</p>
               <CircleButton
                  backgroundColor={"var(--highlight-color"}
                  size={"3rem"}
               >
                  <ArrowDown size={"2rem"} />
               </CircleButton>
            </div>
            <div className={styles.circleContainer}>
               <CircleZoom
                  effectStart={0}
                  effectEnd={0.18}
                  minScale={0.2}
                  maxScale={1.9}
               />
            </div>
            <DarkenScreen effectStart={0.0} effectEnd={0.18} />
         </section>

         <section id="selection-id" className={styles.projectSelectorSection}>
            <div className={styles.header}>
               <div className={styles.arrowWrap}>
                  <h2>Projects of interest</h2>
                  <div className={styles.arrow}>
                     <img src={curlyHighlightArrow} alt="Curly arrow" />
                     <p>Click to see project</p>
                  </div>
               </div>
            </div>

            <div className={styles.projectSelector}>
               <CardSlider>
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                     size={1.5}
                  />
                  <Card
                     paperclipBool={false}
                     image={FightorDieCard}
                     altText={"FightOrDie"}
                     url="/fightordie"
                     size={1.5}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                     size={1.5}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                     size={1.5}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                     size={1.5}
                  />
               </CardSlider>
            </div>
         </section>
         <section id="about-id" className={styles.aboutMeSection}>
            <div className={styles.contentContainer}>
               <div className={styles.infoContainer}>
                  <div className={styles.nameContainer}>
                     <h2>Who is</h2>
                     <h2>Jacob Mølholt Poulsen?</h2>
                  </div>
                  <div className={styles.studyContainer}>
                     <div>
                        <h3>Studying:</h3>
                        <h4>Software engineering</h4>
                     </div>

                     <p>3rd semester - Aalborg University</p>
                  </div>
                  <p className={styles.aboutText}>
                     I am currently studying Software Engineering at Aalborg
                     University. Previously, I attended HTX at Aalborg Tekniske
                     Gymnasium, where I specialized in Programming B and
                     Communication & IT A. These courses provided me with a
                     strong foundation in front-end development, particularly in
                     applying design theories to create user-friendly and
                     visually appealing solutions. Additionally, I have a
                     growing interest in back-end development and enjoy
                     exploring how systems work behind the scenes.
                  </p>
               </div>
               <div className={styles.profileImgContainer}>
                  <img src={profilePicture} alt="Picture of Jacob" />
               </div>
            </div>
            <div className={styles.skillsBtnContainer}>
               <p>Skills</p>
               <CircleButton
                  backgroundColor={"var(--highlight-color"}
                  size={"3rem"}
               >
                  <ArrowDown size={"2rem"} />
               </CircleButton>
            </div>

            <div className={styles.skillContainer}>
               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                  }
                  imgAlt={"C-icon"}
               >
                  {"C"}
                  {"Programming Language"}
               </SkillBox>
               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  }
                  imgAlt={"Javascript-icon"}
               >
                  {"JavaScript"}
                  {"Programming Language"}
               </SkillBox>
               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  }
                  imgAlt={"TypeScript"}
               >
                  {"TypeScript"}
                  {"Programming Language"}
               </SkillBox>

               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  }
                  imgAlt={"Csharp-icon"}
               >
                  {"C#"}
                  {"Programming Language"}
               </SkillBox>

               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  }
                  imgAlt={"TypeScript"}
               >
                  {"TypeScript"}
                  {"Programming Language"}
               </SkillBox>
               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  }
                  imgAlt={"React-icon"}
               >
                  {"React"}
                  {"Website framework"}
               </SkillBox>

               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  }
                  imgAlt={"HTML-icon"}
               >
                  {"HTML5"}
                  {"Markup language"}
               </SkillBox>

               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  }
                  imgAlt={"CSS-icon"}
               >
                  {"CSS"}
                  {"Styling"}
               </SkillBox>

               <SkillBox
                  imgUrl={
                     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  }
                  imgAlt={"MongoDB - Icon"}
               >
                  {"MongoDB"}
                  {"Database"}
               </SkillBox>
            </div>
         </section>
         <section className={styles.contactSection}>
            <MailCopy />
         </section>
      </main>
   );
}
