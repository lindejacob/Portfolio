import styles from "./startpage.module.css";
import Card from "../../components/cards/cards.js";
import Title from "../../components/title/title.js";
import Navbar from "../../components/navbar/navbar.js";
import { CircleButton } from "../../components/button/button.js";
import { CircleZoom, DarkenScreen } from "../../components/motion/motion.js";

//import img
import fabledBackground from "../../img/fabledBackground.svg";
import arrowDown from "../../img/arrowDown.svg";

function Startpage() {
   return (
      <section className={styles.section}>
         <Navbar />
         <div className={styles.titleContainer}>
            <Title />
         </div>
         <div>
            <div className={styles.card}>
               <Card
                  paperclipBool={true}
                  imageUrl={fabledBackground}
                  altText="Fabled background"
                  header=""
               />
            </div>
            <div className={styles.card}>
               <Card
                  paperclipBool={true}
                  imageUrl={fabledBackground}
                  altText="Fabled background"
                  header=""
               />
            </div>
            <div className={styles.card}>
               <Card
                  paperclipBool={true}
                  imageUrl={fabledBackground}
                  altText="Fabled background"
                  header=""
               />
            </div>
            <div className={styles.card}>
               <Card
                  paperclipBool={true}
                  imageUrl={fabledBackground}
                  altText="Fabled background"
                  header=""
               />
            </div>
         </div>
         <div className={styles.scrollBtnContainer}>
            <p>Scroll</p>
            <CircleButton
               imageSize={"50%"}
               imageUrl={arrowDown}
               color={"#FF6331"}
               size={"3rem"}
            />
         </div>
         <div className={styles.circleContainer}>
            <CircleZoom />
         </div>
         <DarkenScreen />
      </section>
   );
}

export default Startpage;
