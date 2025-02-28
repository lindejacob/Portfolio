import React from "react";
import styles from "./Buttons.module.css";

type StandardButtonProps = {
   children: React.ReactNode;
   color?: string;
   backgroundColor?: string;
   fontSize?: string;
   border?: string;
   onClick?: () => void;
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
   imageUrl?: string;
   backgroundColor: string;
   size?: string;
   onClick?: () => void;
   children?: React.ReactElement;
};

export function CircleButton(props: CircleButtonProps) {
   return (
      <div
         style={{
            backgroundImage: `url(${props.imageUrl})`,
            width: props.size,
            backgroundColor: props.backgroundColor,
         }}
         className={styles.circleButton}
         onClick={props.onClick}
      >
         {props.children}
      </div>
   );
}

type SquareButtonProps = {
   backgroundColor: string;
   imgUrl: string;
   imgAlt: string;
};

export function SquareButton(props: SquareButtonProps) {
   return (
      <div
         style={{ backgroundColor: props.backgroundColor }}
         className={styles.squareButton}
      >
         <img src={props.imgUrl} alt={props.imgAlt} />
      </div>
   );
}

type MenuButtonProps = {
   children: React.ReactNode;
   fontSize: string;
   color: string;
   href?: string;
   onClick?: () => void;
};

export function MenuButton(props: MenuButtonProps) {
   return (
      <div className={styles.menuButton} onClick={props.onClick}>
         <a
            href={props.href}
            style={{ fontSize: props.fontSize, color: props.color }}
         >
            {props.children}
         </a>
      </div>
   );
}
