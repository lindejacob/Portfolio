import styles from "./fightordie.module.css";
import FightorDieIMG from "../../assets/FightorDieIMG.png";
import FightorDieFight from "../../assets/FightorDieFight.jpg";
import FightorDieSelect from "../../assets/FightorDieSelect.jpg";

import dottedLine from "../../assets/dottedline.svg";
import { SkillCapsule } from "../../components/skills/Skills";
import { StandardButton } from "../../components/buttons/Buttons";
import { Github } from "react-bootstrap-icons";
const FightOrDie = () => {
   return (
      <main className={styles.fightOrDie}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Project</p>
               <h1>Fight or Die</h1>
               <div className={styles.skillContainer}>
                  <SkillCapsule>Unity</SkillCapsule>
                  <SkillCapsule>Illustrator</SkillCapsule>
                  <SkillCapsule>Scrum</SkillCapsule>
                  <SkillCapsule>C#</SkillCapsule>
                  <SkillCapsule>User testing</SkillCapsule>
               </div>
            </div>
            <div className={styles.titleImageContainer}>
               <img src={FightorDieIMG} alt="Fabled" />
            </div>
            <div className={styles.dottedLineContainer}>
               <img
                  className={styles.dottedLine}
                  src={dottedLine}
                  alt="Orange dotted line"
               />
            </div>
         </section>

         <section className={styles.contentSection}>
            <div className={styles.contentGrid}>
               <div className={styles.contentContainer}>
                  <div className={styles.info}>
                     <p>Year:</p>
                     <p>2023</p>
                  </div>
                  <div className={styles.info}>
                     <p>By:</p>
                     <p>
                        Oleg Sechovcov, Simon Anesen, Signe Poulsen and Jacob
                        Mølholt Poulsen{" "}
                     </p>
                  </div>
                  <div className={styles.aboutContainer}>
                     <p>About</p>
                     <p>
                        In this project, I contributed as a developer and
                        designer, combining hand-drawn elements created by
                        others with enhanced images using filters and effects.
                        This approach gave the game a unique visual style,
                        blending an artistic hand-crafted look with polished
                        digital enhancements. Fight or Die is a thrilling
                        2-player fighter game set in the mythical temple of
                        Resenkhar, where legends speak of a great treasure
                        waiting for the strongest warrior. Players can choose
                        from a roster of distinct characters, each equipped with
                        unique abilities and the potential for devastating
                        combos.
                     </p>
                     <p>
                        The game's dynamic visuals and fast-paced gameplay
                        deliver an adrenaline-packed experience as players
                        battle to claim the treasure. This project was a
                        valuable learning experience, where I developed skills
                        in image editing, asset integration, and collaborative
                        design. Working closely with others, I also gained
                        insights into balancing creative inputs to craft a
                        cohesive and engaging game world.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Front-end designer, and programmer</p>
                  </div>
                  <StandardButton
                     backgroundColor="var(--secondary-color)"
                     border="0.1rem solid var(--primary-color)"
                     onClick={() =>
                        (window.location.href =
                           "https://github.com/GreyZar37/Fight-or-Die")
                     }
                  >
                     <Github size={30}></Github>
                     <p>Fight or Die repository</p>
                  </StandardButton>
               </div>

               <div className={styles.imgContainer}>
                  <img src={FightorDieFight} alt="Fabled" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={FightorDieSelect} alt="Fabled" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default FightOrDie;
