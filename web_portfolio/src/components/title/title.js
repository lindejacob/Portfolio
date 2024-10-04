import styles from "./title.module.css";

function Title() {
   return (
      <div className={styles.headerDiv}>
         <div>
            <h1>Jacob Mølholt Poulsen</h1>
         </div>
         <div className={styles.subheader}>
            <h2>Studying</h2>
            <h2 className={styles.highlight}>software</h2>
            <h2>engineering</h2>
         </div>
      </div>
   );
}

export default Title;
