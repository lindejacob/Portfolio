import { Children } from "react";
import { SquareButton } from "../buttons/Buttons";
import styles from "./skills.module.css";

type SkillBoxProps = {
   imgUrl: string;
   imgAlt: string;
   children: string[];
};

export function SkillBox(props: SkillBoxProps) {
   return (
      <div className={styles.skillBox}>
         <div className={styles.imgContainer}>
            <SquareButton
               backgroundColor={"var(--secondary-color)"}
               imgUrl={props.imgUrl}
               imgAlt={props.imgAlt}
            />
         </div>
         <div className={styles.textContainer}>
            {props.children.map((child, index) => (
               <p key={index}>{child}</p>
            ))}
         </div>
      </div>
   );
}

type SkillCapsuleProps = {
   children: string;
};

export function SkillCapsule(props: SkillCapsuleProps) {
   return <p className={styles.skillCapsule}>{props.children}</p>;
}
