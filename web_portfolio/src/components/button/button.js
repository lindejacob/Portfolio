import React from "react"; // Ensure React is imported
import style from "./button.module.css";

const FilledButton = ({ text, textColor, color, fontSize }) => {
   const dynStyle = {
      color: textColor,
      backgroundColor: color,
      fontSize: fontSize,
   };

   return (
      <button style={dynStyle} className={style.filledButton}>
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

   return <button style={dynStyle} className={style.circleButton}></button>;
};

export { FilledButton, CircleButton };
