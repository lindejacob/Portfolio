import styles from "./fabled.module.css";
import fabledBackground from "../../assets/fabledBackground.png";
import dottedLine from "../../assets/dottedline.svg";
const Fabled = () => {
   return (
      <main className={styles.fabled}>
         <section className={styles.titleSection}>
            <div className={styles.header}>
               <p>Project</p>
               <h1>Fabled</h1>
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
                     <p>2021</p>
                  </div>
                  <div className={styles.info}>
                     <p>With:</p>
                     <p>John Doe, John Doe, John Doe</p>
                  </div>
                  <div className={styles.aboutContainer}>
                     <p>About</p>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc fringilla, tortor sit amet lobortis vehicula, ex
                        nunc tristique lacus, vehicula ullamcorper justo felis
                        blandit tortor. Proin non lorem vel lacus ultricies
                        facilisis vitae non erat. Fusce tempus rhoncus metus non
                        fermentum. In lobortis efficitur nunc nec sollicitudin.
                        In vel diam eros. Proin blandit mollis pretium. Sed
                        suscipit ut sapien sit amet gravida. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Sed
                        pulvinar quam nisi, et finibus odio consectetur sit
                        amet. Sed suscipit congue ligula sit amet eleifend. Sed
                        efficitur eros venenatis arcu consectetur posuere.
                        Praesent molestie mollis accumsan. Mauris pharetra nunc
                        id odio aliquet, nec facilisis justo feugiat. Aliquam
                        tincidunt vel diam nec viverra. Cras porta ligula eget
                        massa convallis, ac egestas magna mattis. Etiam a ex sit
                        amet nunc fermentum euismod. Aliquam finibus enim sed
                        mauris sollicitudin tincidunt. Sed non purus posuere,
                        placerat erat a, vehicula neque. Ut est ante, facilisis
                        quis purus vehicula, pharetra accumsan tellus. Morbi at
                        orci sagittis, scelerisque augue ut, ornare mauris.
                        Curabitur sem lectus, viverra vel tellus id, condimentum
                        sodales libero. Aliquam bibendum enim at lectus finibus,
                        a pellentesque quam volutpat. Morbi in convallis massa,
                        a laoreet magna. Nunc ac purus nisl. Curabitur tempor
                        ipsum vitae tempus hendrerit. Pellentesque massa arcu,
                        imperdiet eget venenatis et, gravida in magna. Mauris
                        tempor lacus non ante venenatis, ac rhoncus enim
                        accumsan.
                     </p>
                  </div>
                  <div className={styles.info}>
                     <p>Role:</p>
                     <p>Front-end designer, Music Producer</p>
                  </div>
               </div>

               <div className={styles.imgContainer}>
                  <img src={fabledBackground} alt="Fabled" />
               </div>
               <div className={styles.imgContainer}>
                  <img src={fabledBackground} alt="Fabled" />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Fabled;
