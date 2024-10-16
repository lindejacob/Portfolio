import React from "react";
import styles from "./Buttons.module.css";
import ReactNode from "react";
import { color } from "framer-motion";

type StandardButtonProps = {
   children: React.ReactNode;
   color: string;
   backgroundColor?: string;
   fontSize: string;
   border?: string;
   onClick?: React.ReactNode;
};

export function StandardButton(props: StandardButtonProps) {
   return (
      <button
         style={{
            color: props.color,
            backgroundColor: props.backgroundColor,
            fontSize: props.fontSize,
            border: props.border,
         }}
         className={styles.standardButton}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   );
}

type CircleButtonProps = {
   imageUrl: string;
   imageSize: string;
   backgroundColor: string;
   size?: string;
   onClick?: () => void;
};

export function CircleButton(props: CircleButtonProps) {
   return (
      <button
         style={{
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: props.imageSize,
            width: props.size,
            backgroundColor: props.backgroundColor,
         }}
         className={styles.circleButton}
         onClick={props.onClick}
      />
   );
}

type MenuButtonProps = {
   children: React.ReactNode;
   fontSize: string;
   color: string;
   onClick?: () => void;
};

export function MenuButton(props: MenuButtonProps) {
   return (
      <div className={styles.menuButton} onClick={props.onClick}>
         <p style={{ fontSize: props.fontSize, color: props.color }}>
            {props.children}
         </p>
      </div>
   );
}
