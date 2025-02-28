import styles from "./fabled.module.css";
import fabledBackground from "../../assets/fabledBackground.png";
import FabledGame from "../../assets/FabledGame.jpg";
import FabledVolk from "../../assets/FabledVolk.jpg";
import dottedLine from "../../assets/dottedline.svg";
import { Github } from "react-bootstrap-icons";
import { SkillCapsule } from "../../components/skills/Skills";
import { StandardButton } from "../../components/buttons/Buttons";
const Fabled = () => {
   return (
      <main className={styles.fabled}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Project</p>
               <h1>Fabled</h1>
               <div className={styles.skillContainer}>
                  <SkillCapsule>Unity</SkillCapsule>
                  <SkillCapsule>Illustrator</SkillCapsule>
                  <SkillCapsule>Scrum</SkillCapsule>
                  <SkillCapsule>C#</SkillCapsule>
                  <SkillCapsule>User testing</SkillCapsule>
               </div>
            </div>
            <div className={styles.titleImageContainer}>
               <img src={fabledBackground} alt="Fabled" />
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
                        In this project, I worked as a graphic designer,
                        creating a significant portion of the game's visual
                        assets. I developed skills in producing vector graphics
                        on a larger scale and animating them to bring dynamic
                        and engaging visuals to the game. The game itself is a
                        cozy farming simulator where you take on the role of a
                        farmer working to pay off a loan to a cunning wolf.
                        Along the way, you’ll grow crops, expand the farm, and
                        interact with quirky characters who bring life to the
                        farm. The ultimate goal is to build a thriving community
                        and become debt-free.
                     </p>
                     <p>
                        This was an assignment in Digital Design and
                        Development, where I not only honed my graphic design
                        and animation skills but also gained valuable experience
                        in teamwork. We collaborated as a team, utilizing
                        elements of the Scrum framework to ensure effective
                        communication and project management throughout the
                        process.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Front-end designer, Music Producer</p>
                  </div>
                  <StandardButton
                     backgroundColor="var(--secondary-color)"
                     border="0.1rem solid var(--primary-color)"
                     onClick={() =>
                        (window.location.href =
                           "https://github.com/GreyZar37/Fabled")
                     }
                  >
                     <Github size={30}></Github>
                     <p>Fabled repository</p>
                  </StandardButton>
               </div>

               <div className={styles.imgContainer}>
                  <img src={FabledGame} alt="Fabled" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={FabledVolk} alt="Fabled" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Fabled;
