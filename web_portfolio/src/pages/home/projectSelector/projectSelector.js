import styles from "./projectSelector.module.css";
import fabledBackground from "../../../img/fabledBackground.svg";
import CardSlider from "../../../components/motion/cardSlider.js";

const cards = [
   {
      size: "1.5",
      imageUrl: fabledBackground,
      url: "./fabled",
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
      url: "./fabled",
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
      url: "./fabled",
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
      url: "./fabled",
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
      url: "./fabled",
   },
];

function ProjectSelector() {
   return (
      <section className={styles.section}>
         <div>
            <div className={styles.header}>
               <h2>Projects of interest</h2>
            </div>
            <div className={styles.projectSelector}>
               <CardSlider cards={cards} />
            </div>
         </div>
      </section>
   );
}

export default ProjectSelector;
