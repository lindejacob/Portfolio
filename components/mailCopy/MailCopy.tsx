import React, { useState } from "react";
import styles from "./MailCopy.module.css";
import { Email, LocationCurrent, Checkmark } from "@carbon/icons-react"; // Import the new icon

export function MailCopy() {
   const textToCopy = "Lindejacob0612@gmail.com";
   const [feedback, setFeedback] = useState("none");
   const [isBlocked, setIsBlocked] = useState(false);

   const hoverHandler = () => {
      if (!isBlocked) {
         setFeedback("hover");
      }
   };

   const leaveHandler = () => {
      if (!isBlocked) {
         setFeedback("none");
      }
   };

   const handleClick = () => {
      if (!isBlocked) {
         setFeedback("clicked");
         setIsBlocked(true);
         setTimeout(() => {
            setFeedback("none");
            setIsBlocked(false);
         }, 10000); // 10 seconds
      }
   };

   return (
      <div
         className={styles.container}
         onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            handleClick();
         }}
         onMouseOver={hoverHandler}
         onMouseOut={leaveHandler}
      >
         <div
            className={`${styles.copyContainer} ${
               feedback === "clicked" ? styles.clicked : ""
            }`}
         >
            <div className={styles.mailContainer}>
               <div>
                  <Email size={"6rem"} />
               </div>
               <p>{textToCopy}</p>
            </div>
            <div className={styles.clickToCopyContainer}>
               <p>click to copy</p>
            </div>
         </div>
         <div className={styles.feedbackContainer}>
            <div
               className={`${styles.cursor} ${
                  feedback === "hover"
                     ? styles.hover
                     : feedback === "clicked"
                     ? styles.clicked
                     : styles.hide
               }`}
            >
               {feedback === "clicked" ? (
                  <Checkmark
                     size={"6rem"}
                     style={{ color: "var(--highlight-color))" }}
                  />
               ) : (
                  <LocationCurrent size={"6rem"} />
               )}
            </div>
         </div>
      </div>
   );
}
