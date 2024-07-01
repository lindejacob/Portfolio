import styles from "./title.module.css";

function Title() {
   return (
      <div className={styles.headerDiv}>
         <div>
            <h1>Jacob Mølholt Poulsen</h1>
         </div>
         <div className={styles.subheader}>
            <h2>Innovative</h2>
            <h2 className={styles.highlight}>Code,</h2>
            <h2>Lasting Impact</h2>
         </div>
      </div>
   );
}

export default Title;
