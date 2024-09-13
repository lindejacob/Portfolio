import styles from "./cards.module.css";
import paperclipUrl from "../../img/paperclip.svg";
import { transform } from "framer-motion";

const Card = ({ paperclipBool, imageUrl, header, altText = "Card", size }) => {
   if (paperclipBool === true) {
      var paperclip = paperclipUrl;
   }

   const dynStyle = {
      transform: `scale(${size})`,
   };

   return (
      <div style={dynStyle} className={styles.card}>
         <img src={paperclip} className={styles.paperclip} alt=""></img>
         <img className={styles.background} src={imageUrl} alt={altText} />
         <p>{header}</p>
      </div>
   );
};

export default Card;
