import styles from "./information.module.css";

const SkillsCapsule = ({
   children: text,
   color,
   backgroundColor,
   fontSize,
   borderColor,
}) => {
   return (
      <button
         style={{
            color: color,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            borderColor: borderColor,
         }}
         className={styles.skillCapsule}
      >
         {text}
      </button>
   );
};

export default SkillsCapsule;
