import styles from "./cards.module.css";
import paperclipUrl from "../../img/paperclip.svg";
import { transform } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

const Card = ({
   paperclipBool,
   imageUrl,
   header,
   altText = "Card",
   size,
   boxshadow,
   url,
}) => {
   if (paperclipBool === true) {
      var paperclip = paperclipUrl;
   }

   const dynStyle = {
      transform: `scale(${size})`,
      boxShadow: boxshadow,
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
