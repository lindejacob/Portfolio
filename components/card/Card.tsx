import React from "react";
import styles from "./Card.module.css";
import paperclipUrl from "../../assets/paperclip.svg";
import { navigate } from "vike/client/router";

type CardProps = {
   paperclipBool: boolean;
   image: string;
   header?: string;
   altText: string;
   size?: number;
   url?: string;
};

export function Card(props: CardProps) {
   const handleClick = () => {
      if (props.url) {
         navigate(props.url);
      }
   };

   const paperclip = props.paperclipBool ? paperclipUrl : null;

   return (
      <div
         className={styles.card}
         style={{ transform: `scale(${props.size})` }}
         onClick={handleClick}
      >
         {paperclip && (
            <img src={paperclip} alt="paperclip" className={styles.paperclip} />
         )}
         <img
            src={props.image}
            alt={props.altText}
            className={styles.background}
         />
         <h1>{props.header}</h1>
      </div>
   );
}
