import React from "react";
import styles from "./button.module.css";

const FilledButton = ({ text, textColor, color, fontSize }) => {
   const dynStyle = {
      color: textColor,
      backgroundColor: color,
      fontSize: fontSize,
   };

   return (
      <button style={dynStyle} className={styles.filledButton}>
         {text}
      </button>
   );
};

const CircleButton = ({ imageSize, imageUrl, color, size }) => {
   const dynStyle = {
      backgroundColor: color,
      backgroundSize: imageSize,
      width: size,
      backgroundImage: `url(${imageUrl})`,
   };

   return <button style={dynStyle} className={styles.circleButton}></button>;
};

const OutlineButton = ({ text, borderColor, color, fontSize }) => {
   const dynStyle = {
      borderColor: borderColor,
      color: color,
      fontSize: fontSize,
   };
   return (
      <button style={dynStyle} className={styles.outlineButton}>
         {text}
      </button>
   );
};

export { FilledButton, CircleButton, OutlineButton };
