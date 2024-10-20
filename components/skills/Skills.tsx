import { s } from "framer-motion/client";
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
            {props.children.map(child => (
               <p>{child}</p>
            ))}
         </div>
      </div>
   );
}
