import styles from "./fabled.module.css";
import NovaIMG from "../../assets/NovaIMG.png";
import NovaBoard from "../../assets/NovaBoard.png";
import NovaEdit from "../../assets/NovaEdit.png";
import dottedLine from "../../assets/dottedline.svg";
import { SkillCapsule } from "../../components/skills/Skills";
const Nova = () => {
   return (
      <main className={styles.fabled}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Project</p>
               <h1>Nova</h1>
               <div className={styles.skillContainer}>
                  <SkillCapsule>Figma</SkillCapsule>
                  <SkillCapsule>Javascript</SkillCapsule>
                  <SkillCapsule>CSS</SkillCapsule>
                  <SkillCapsule>HTML</SkillCapsule>
                  <SkillCapsule>Websockets</SkillCapsule>
                  <SkillCapsule>MongoDB</SkillCapsule>
                  <SkillCapsule>User testing</SkillCapsule>
               </div>
            </div>
            <div className={styles.titleImageContainer}>
               <img src={NovaIMG} alt="Nova IMG" />
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
                        Alexander Arbjerg Mollerup, Benjamin Mose Slot, Jacob
                        Mølholt Poulsen, Kasper Schnejder, Mathias Olesen,
                        Nicolaj Blach{" "}
                     </p>
                  </div>
                  <div className={styles.aboutContainer}>
                     <p>About</p>
                     <p>
                        In this project, I contributed to the development of an
                        opinionated project management software tailored
                        specifically for new students. The software simplifies
                        task organization with pre-defined workflows and
                        real-time collaboration features, encouraging effective
                        time management and teamwork. Its user-friendly design
                        ensures students can focus on their studies without
                        feeling overwhelmed by complex tools.
                     </p>
                     <p>
                        This was an assignment in Software Engineering, where I
                        gained hands-on experience in designing and implementing
                        databases, integrating WebSockets for live updates, and
                        creating a responsive, intuitive website. Working as a
                        team, we followed Agile principles and incorporated
                        elements of the Scrum framework. This project not only
                        enhanced my technical skills in web development and
                        real-time systems but also taught me valuable lessons
                        about collaboration and creating user-centered
                        solutions.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Front-end designer</p>
                  </div>
               </div>

               <div className={styles.imgContainer}>
                  <img src={NovaBoard} alt="Kanban board" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={NovaEdit} alt="Edit popup" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Nova;
