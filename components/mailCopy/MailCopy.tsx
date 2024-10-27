import React, { useState } from "react";
import styles from "./MailCopy.module.css";
import { Check2, Envelope } from "react-bootstrap-icons";

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
         }, 2000); // 10 seconds
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
                  <Envelope size={"6rem"} color={"var(--secondary-color)"} />
               </div>
               <p>{textToCopy}</p>
            </div>
            <div className={styles.clickToCopyContainer}>
               <p>click to copy</p>
            </div>
         </div>
         <div className={styles.feedbackContainer}>
            <div
               className={`${styles.feedback} ${
                  feedback === "clicked" ? styles.clicked : styles.hide
               }`}
            >
               {" "}
               {feedback === "clicked" && (
                  <Check2 size={"6rem"} color={"var(--highlight-color)"} />
               )}
            </div>
         </div>
      </div>
   );
}
