import React from "react";
import styles from "./button.module.css";

const FilledButton = ({
   children: text,
   color,
   backgroundColor,
   fontSize,
   borderColor,
   onClick,
}) => {
   return (
      <button
         style={{
            color: color,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            borderColor: borderColor,
         }}
         className={styles.filledButton}
         onClick={onClick}
      >
         {text}
      </button>
   );
};

const CircleButton = ({
   imageSize,
   imageUrl,
   backgroundColor,
   size,
   onClick,
}) => {
   return (
      <button
         style={{
            backgroundColor: backgroundColor,
            backgroundSize: imageSize,
            width: size,
            backgroundImage: `url(${imageUrl})`,
         }}
         className={styles.circleButton}
         onClick={onClick}
      ></button>
   );
};
export { FilledButton, CircleButton };
