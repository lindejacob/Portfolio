import styles from "./motion.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function CircleZoom() {
   const { scrollYProgress } = useScroll();
   const minScale = 0.2;

   const scale = useTransform(scrollYProgress, [0.0, 0.18], [minScale, 1]);

   return (
      <motion.div
         className={styles.circle}
         style={{
            scale: scale,
         }}
      ></motion.div>
   );
}

function DarkenScreen() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);

   return (
      <motion.div
         className={styles.darkenScreen}
         style={{
            opacity: opacity,
         }}
      ></motion.div>
   );
}

export { CircleZoom, DarkenScreen };
