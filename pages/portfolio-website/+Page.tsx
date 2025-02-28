import styles from "./nova.module.css";
import PortfolioHomepageIMG from "../../assets/portfolioHomepage.png";
import PortfolioProjectSelectorIMG from "../../assets/portfolioProjectSelector.png";
import PortfolioAboutMeIMG from "../../assets/portfolioAboutMe.png";

import dottedLine from "../../assets/dottedline.svg";
import { SkillCapsule } from "../../components/skills/Skills";
import { StandardButton } from "../../components/buttons/Buttons";
import { Github } from "react-bootstrap-icons";
const portfolioWebsite = () => {
   return (
      <main className={styles.portfolio}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Portfolio</p>
               <h1>jacobpoulsen.dev</h1>
               <div className={styles.skillContainer}>
                  <SkillCapsule>Figma</SkillCapsule>
                  <SkillCapsule>Typescript</SkillCapsule>
                  <SkillCapsule>CSS</SkillCapsule>
                  <SkillCapsule>Framer motion</SkillCapsule>
                  <SkillCapsule>Vite</SkillCapsule>
               </div>
            </div>
            <div className={styles.titleImageContainer}>
               <img src={PortfolioHomepageIMG} alt="Nova IMG" />
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
                     <p>2024</p>
                  </div>
                  <div className={styles.info}>
                     <p>By:</p>
                     <p>Jacob Mølholt Poulsen </p>
                  </div>
                  <div className={styles.aboutContainer}>
                     <p>About</p>
                     <p>
                        This portfolio website was designed and developed to
                        showcase my projects and skills in a dynamic and
                        engaging way. It leverages modern web technologies to
                        provide a seamless user experience, highlighting my
                        proficiency in front-end development and server-side
                        rendering.
                     </p>
                     <p>
                        Built with React.js and Vite, this site employs
                        server-side rendering (SSR). Framer Motion was used to
                        implement smooth, interactive animations, enhancing the
                        visual appeal and user engagement. For deployment and
                        edge computing, I utilized Wrangler, ensuring fast and
                        reliable access. Figma was integral in the design
                        process, allowing for precise UI/UX planning and
                        execution. This project demonstrates my ability to
                        integrate modern tools and frameworks to create a
                        high-performance, visually compelling web application.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Full-stack + Designer</p>
                  </div>
                  <StandardButton
                     backgroundColor="var(--secondary-color)"
                     border="0.1rem solid var(--primary-color)"
                     onClick={() =>
                        (window.location.href =
                           "https://github.com/lindejacob/Portfolio")
                     }
                  >
                     <Github size={30}></Github>
                     <p>Portfolio repository</p>
                  </StandardButton>
               </div>

               <div className={styles.imgContainer}>
                  <img src={PortfolioProjectSelectorIMG} alt="Kanban board" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={PortfolioAboutMeIMG} alt="Edit popup" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default portfolioWebsite;
