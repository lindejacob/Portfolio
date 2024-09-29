import styles from "./projectSelector.module.css";
import Card from "../../components/cards/cards.js";
import { OutlineButton } from "../../components/button/button.js";
import fabledBackground from "../../img/fabledBackground.svg";

function ProjectSelector() {
   return (
      <section className={styles.section}>
         <div className={styles.header}>
            <h2>Projects of interest</h2>
         </div>
         <div className={styles.projectSelector}>
            <div className={styles.cardContainer}>
               <div className={styles.card}>
                  <Card
                     size={1.6}
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
               <div className={styles.card}>
                  <Card
                     size={1.7}
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
               <div className={styles.card}>
                  <Card
                     size={1.6}
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
            </div>
            <div className={styles.enterBtnContainer}>
               <OutlineButton
                  text="Enter"
                  borderColor={"var(--highligt-color)"}
                  color={"var(--primary-color)"}
                  fontSize={"2rem"}
               />
            </div>
         </div>
      </section>
   );
}

export default ProjectSelector;
