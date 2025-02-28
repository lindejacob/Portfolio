import styles from "./kmd.module.css";
import KMDBackground from "../../assets/kmdBackground.png";
import KMDView from "../../assets/kmdView.png";
import KMDSurvey from "../../assets/kmdSurvey.png";
import dottedLine from "../../assets/dottedline.svg";
import { SkillCapsule } from "../../components/skills/Skills";
import { StandardButton } from "../../components/buttons/Buttons";
import { Github } from "react-bootstrap-icons";
const Nova = () => {
   return (
      <main className={styles.nova}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Collaboration project</p>
               <h1>KMD</h1>
               <div className={styles.skillContainer}>
                  <SkillCapsule>Figma</SkillCapsule>
                  <SkillCapsule>Typescript</SkillCapsule>
                  <SkillCapsule>React</SkillCapsule>
                  <SkillCapsule>ASP.net</SkillCapsule>
                  <SkillCapsule>PDF scraping</SkillCapsule>
               </div>
            </div>
            <div className={styles.titleImageContainer}>
               <img src={KMDBackground} alt="Nova IMG" />
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
                     <p>2024s</p>
                  </div>
                  <div className={styles.info}>
                     <p>By:</p>
                     <p>
                        Anton Mohr Vestergaard, August Hagedal Ojén Andersen,
                        Jacob Mølholt Poulsen, Kasper Schnejder, Mikkel Emil
                        Burmølle Jensen, Nicolaj Blach, Tobias Haugaard Koch{" "}
                     </p>
                  </div>
                  <div className={styles.aboutContainer}>
                     <p>About</p>
                     <p>
                        In a collaborative project with KMD, our team developed
                        an Article-30 GDPR management tool. This tool
                        streamlines the process of managing and reporting
                        personal data breaches, automating the creation of XML
                        formatted listings ready for submission to Datatilsynet.
                        The core functionality involves scraping information
                        from PDF documents, extracting relevant details, and
                        structuring them according to GDPR requirements. This
                        significantly simplifies compliance and reduces the
                        administrative burden associated with data breach
                        reporting.
                     </p>

                     <p>
                        This project provided a valuable opportunity to work on
                        a real-world application with direct implications for
                        data privacy. Our team utilized TypeScript and React for
                        the frontend, building a responsive and user-friendly
                        interface for interacting with the tool. This involved
                        designing components for document upload, data
                        visualization, and report generation. For the backend,
                        we worked with ASP.NET and C# to develop the server-side
                        logic, including the PDF scraping functionality, data
                        processing, and XML generation. This experience
                        strengthened our skills in full-stack development and
                        provided practical insight into the challenges and
                        considerations involved in building GDPR-compliant
                        software.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Full-stack developer</p>
                  </div>
                  <StandardButton
                     backgroundColor="var(--secondary-color)"
                     border="0.1rem solid var(--primary-color)"
                     onClick={() =>
                        (window.location.href =
                           "https://github.com/Solsystemet/KMD-Listing-Management-API")
                     }
                  >
                     <Github size={30}></Github>
                     <p>KMD Article-30 repository</p>
                  </StandardButton>
               </div>

               <div className={styles.imgContainer}>
                  <img src={KMDSurvey} alt="Kanban board" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={KMDView} alt="Edit popup" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Nova;
