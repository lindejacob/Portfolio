import styles from "./projectSelector.module.css";
import Card from "../../components/cards/cards.js";
import { OutlineButton } from "../../components/button/button.js";
import fabledBackground from "../../img/fabledBackground.svg";
import CardSlider from "../../components/motion/cardSlider.js";

const cards = [
   {
      size: "1.5",
      imageUrl: fabledBackground,
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
   },
   {
      size: "1.5",
      imageUrl: fabledBackground,
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

//  <Card
//     size={1.6}
//     paperclipBool={false}
//     imageUrl={fabledBackground}
//     altText="Fabled background"
//     header=""
//  />;
