import styles from "./fabled.module.css";

function Fabled() {
   return (
      <main className={styles.fabled}>
         <h2 className={styles.header}>Fabled</h2>
         <p className={styles.year}>Year: 2021</p>
         <p className={styles.with}>With: John Doe, John Doe, John Doe</p>
         <div className={styles.contentContainer}>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               fringilla, tortor sit amet lobortis vehicula, ex nunc tristique
               lacus, vehicula ullamcorper justo felis blandit tortor. Proin non
               lorem vel lacus ultricies facilisis vitae non erat. Fusce tempus
               rhoncus metus non fermentum. In lobortis efficitur nunc nec
               sollicitudin. In vel diam eros. Proin blandit mollis pretium. Sed
               suscipit ut sapien sit amet gravida. Interdum et malesuada fames
               ac ante ipsum primis in faucibus. Sed pulvinar quam nisi, et
               finibus odio consectetur sit amet. Sed suscipit congue ligula sit
               amet eleifend. Sed efficitur eros venenatis arcu consectetur
               posuere. Praesent molestie mollis accumsan. Mauris pharetra nunc
               id odio aliquet, nec facilisis justo feugiat. Aliquam tincidunt
               vel diam nec viverra. Cras porta ligula eget massa convallis, ac
               egestas magna mattis. Etiam a ex sit amet nunc fermentum euismod.
               Aliquam finibus enim sed mauris sollicitudin tincidunt. Sed non
               purus posuere, placerat erat a, vehicula neque. Ut est ante,
               facilisis quis purus vehicula, pharetra accumsan tellus. Morbi at
               orci sagittis, scelerisque augue ut, ornare mauris. Curabitur sem
               lectus, viverra vel tellus id, condimentum sodales libero.
               Aliquam bibendum enim at lectus finibus, a pellentesque quam
               volutpat. Morbi in convallis massa, a laoreet magna. Nunc ac
               purus nisl. Curabitur tempor ipsum vitae tempus hendrerit.
               Pellentesque massa arcu, imperdiet eget venenatis et, gravida in
               magna. Mauris tempor lacus non ante venenatis, ac rhoncus enim
               accumsan.
            </p>
         </div>
      </main>
   );
}

export default Fabled;
