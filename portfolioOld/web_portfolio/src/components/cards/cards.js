import styles from "./cards.module.css";
import paperclipUrl from "../../img/paperclip.svg";
import { transform } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = ({
   paperclipBool,
   imageUrl,
   header,
   altText = "Card",
   size,
   url,
}) => {
   const navigate = useNavigate();

   if (paperclipBool === true) {
      var paperclip = paperclipUrl;
   }

   const handleClick = () => {
      navigate(url);
   };

   const dynStyle = {
      transform: `scale(${size})`,
   };

   return (
      <div style={dynStyle} className={styles.card} onClick={handleClick}>
         <img src={paperclip} className={styles.paperclip} alt=""></img>
         <img className={styles.background} src={imageUrl} alt={altText} />
         <p>{header}</p>
      </div>
   );
};

export default Card;
