import styles from "./cards.module.css";
import paperclipUrl from "../../img/paperclip.svg";

const Card = ({ paperclipBool, imageUrl, header, altText = "Card" }) => {
   if (paperclipBool === true) {
      var paperclip = paperclipUrl;
   }
   return (
      <div className={styles.card}>
         <img src={paperclip} className={styles.paperclip} alt=""></img>
         <img className={styles.background} src={imageUrl} alt={altText} />
         <p>{header}</p>
      </div>
   );
};

export default Card;
