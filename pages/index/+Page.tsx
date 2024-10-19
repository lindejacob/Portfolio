import styles from "./index.module.css";

import { CircleButton } from "../../components/buttons/Buttons";
import {
   CircleZoom,
   DarkenScreen,
} from "../../components/circleScrollTransition/CircleScrollTransition";
import CardSlider from "../../components/cardSlider/CardSlider";
import { Card } from "../../components/card/Card";

import arrowDown from "../../assets/arrowDown.svg";
import fabledCard from "../../assets/fabledCard.svg";
import curlyHighlightArrow from "../../assets/curlyHighlightArrow.svg";

export default function Page() {
   return (
      <main>
         <section className={styles.startSection}>
            <div className={styles.titleContainer}>
               <h1>Jacob Mølholt Poulsen</h1>
               <h2>Studying software engineering</h2>
            </div>
            <div className={styles.scrollBtnContainer}>
               <p>Scroll</p>
               <CircleButton
                  imageUrl={arrowDown}
                  imageSize={"50%"}
                  backgroundColor={"var(--highlight-color"}
                  size={"3rem"}
               />
            </div>
            <div className={styles.circleContainer}>
               <CircleZoom
                  effectStart={0}
                  effectEnd={0.18}
                  minScale={0.2}
                  maxScale={1.9}
               />
            </div>
            <DarkenScreen effectStart={0.0} effectEnd={0.18} />
         </section>

         <section className={styles.projectSelectorSection}>
            <div className={styles.header}>
               <div className={styles.arrowWrap}>
                  <h2>Projects of interest</h2>
                  <div className={styles.arrow}>
                     <img src={curlyHighlightArrow} alt="Curly arrow" />
                     <p>Click to see project</p>
                  </div>
               </div>
            </div>

            <div className={styles.projectSelector}>
               <CardSlider>
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                     url="/fabled"
                  />
               </CardSlider>
            </div>
         </section>
         <section className={styles.aboutMeSection}>
            <div className={styles.contentContainer}>
               <div className={styles.nameContainer}>
                  <h3>Who is</h3>
                  <h2>Jacob Mølholt Poulsen</h2>
               </div>
               <div className={styles.studyContainer}>
                  <h3>Studying</h3>
                  <h2>Software engineering</h2>
               </div>
               <p className={styles.aboutText}>
                  Lorem ipsum dolor sit amet consectetur. Pharetra fringilla
                  velit scelerisque rhoncus. Pulvinar vitae nisi ultrices amet
                  cras integer proin commodo. Eget placerat adipiscing egestas
                  risus nisi ultrices suscipit massa molestie. Odio velit non
                  risus morbi pretium leo.
               </p>
            </div>
         </section>
      </main>
   );
}
