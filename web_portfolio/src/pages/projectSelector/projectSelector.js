import styles from "./projectSelector.module.css";
import Card from "../../components/cards/cards.js";
import { OutlineButton } from "../../components/button/button.js";
import fabledBackground from "../../img/fabledBackground.svg";

function ProjectSelector() {
   const enterButtonStyle = {
      color: "var(--secondary-color)",
      fontSize: "1.5rem",
   };

   return (
      <section className={styles.section}>
         <div className={styles.header}>
            <h2>Projects of interest</h2>
         </div>
         <div className={styles.projectSelector}>
            <div className={styles.cardContainer}>
               <div className={styles.card}>
                  <Card
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
               <div className={styles.card}>
                  <Card
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
               <div className={styles.card}>
                  <Card
                     paperclipBool={false}
                     imageUrl={fabledBackground}
                     altText="Fabled background"
                     header=""
                  />
               </div>
            </div>
            <OutlineButton text="Enter" style={enterButtonStyle} />
         </div>
      </section>
   );
}

export default ProjectSelector;
