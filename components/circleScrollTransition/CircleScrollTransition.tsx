import styles from "./CircleScrollTransition.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

type CircleZoomProps = {
   minScale: number;
   maxScale: number;
   effectStart: number;
   effectEnd: number;
};

export function CircleZoom(props: CircleZoomProps) {
   const { minScale, maxScale, effectStart, effectEnd } = props;
   const { scrollYProgress } = useScroll();

   const scale = useTransform(
      scrollYProgress,
      [effectStart, effectEnd],
      [minScale, maxScale]
   );

   return <motion.div className={styles.circle} style={{ scale: scale }} />;
}

type DarkenScreenProps = {
   effectStart: number;
   effectEnd: number;
};

export function DarkenScreen(props: DarkenScreenProps) {
   const { effectStart, effectEnd } = props;
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(
      scrollYProgress,
      [effectStart, effectEnd],
      [0, 1]
   );

   return (
      <motion.div
         className={styles.darkenScreen}
         style={{
            opacity: opacity,
         }}
      />
   );
}
