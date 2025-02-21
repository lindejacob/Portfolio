import React from "react";
import styles from "./Card.module.css";
import paperclipUrl from "../../assets/paperclip.svg";
import { navigate } from "vike/client/router";

type CardProps = {
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

   return (
      <div
         className={styles.card}
         style={{ transform: `scale(${props.size})` }}
         onClick={handleClick}
      >
         <img
            src={props.image}
            alt={props.altText}
            className={styles.background}
         />
         <h1>{props.header}</h1>
      </div>
   );
}
