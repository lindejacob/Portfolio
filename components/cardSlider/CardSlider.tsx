import React, { useState, useRef, ReactNode, Children } from "react";
import { motion } from "framer-motion";
import styles from "./cardSlider.module.css";
import { CircleButton } from "../buttons/Buttons";
import arrow from "../../assets/arrow.svg";

type CardSliderProps = {
   children: ReactNode;
};

const CardSlider: React.FC<CardSliderProps> = ({ children }) => {
   const numChildren = Children.count(children);
   const [positionIndexes, setPositionIndexes] = useState(
      Array.from({ length: numChildren }, (_, i) => i)
   );
   const lastClickTimeRef = useRef(0);

   // Handle the next button click
   const handleNext = () => {
      const now = Date.now();
      if (now - lastClickTimeRef.current < 250) return;
      lastClickTimeRef.current = now;

      setPositionIndexes(prevIndexes => {
         const updatedIndexes = prevIndexes.map(
            prevIndex => (prevIndex + 1) % numChildren
         );
         return updatedIndexes;
      });
   };

   // Handle the back button click
   const handleBack = () => {
      const now = Date.now();
      if (now - lastClickTimeRef.current < 250) return;
      lastClickTimeRef.current = now;

      setPositionIndexes(prevIndexes => {
         const updatedIndexes = prevIndexes.map(
            prevIndex => (prevIndex - 1 + numChildren) % numChildren
         );
         return updatedIndexes;
      });
   };

   // Define animation variants for the cards
   const cardVariants = {
      center: {
         x: "0%",
         scale: 1,
         zIndex: 5,
         filter:
            "drop-shadow(-10px 0px 10px rgba(0, 0, 0, 0.3)) drop-shadow(10px 0px 10px rgba(0, 0, 0, 0.5))",
         transition: {
            delay: 0.1,
         },
      },
      left: {
         x: "-60%",
         y: "1%",
         rotate: "-20deg",
         scale: 0.8,
         zIndex: 4,
         pointerEvents: "none",
         filter: "none",
         transition: {
            delay: 0.1,
         },
      },
      right: {
         x: "60%",
         y: "1%",
         rotate: "20deg",
         scale: 0.8,
         zIndex: 4,
         pointerEvents: "none",
         filter: "none",
         transition: {
            delay: 0.1,
         },
      },
      background: {
         x: "0%",
         scale: 0,
         zIndex: 0,
         pointerEvents: "none",
         filter: "none",
         opacity: 0,
      },
   };

   return (
      <div className={styles.cardSliderContainer}>
         {Children.map(children, (child, index) => {
            // Determine the position variant based on the index
            const position =
               positionIndexes[index] === 0
                  ? "left"
                  : positionIndexes[index] === 1
                  ? "center"
                  : positionIndexes[index] === 2
                  ? "right"
                  : "background";
            return (
               <motion.div
                  key={index}
                  initial="center"
                  animate={position}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  className={styles.cardWrapper}
               >
                  {child}
               </motion.div>
            );
         })}
         <div className="flex flex-row gap-3">
            <div className={styles.rightArrow}>
               <CircleButton
                  backgroundColor={"transparent"}
                  imageSize={"100%"}
                  imageUrl={arrow}
                  onClick={handleBack}
               />
            </div>
            <div className={styles.leftArrow}>
               <CircleButton
                  backgroundColor={"transparent"}
                  imageSize={"100%"}
                  imageUrl={arrow}
                  onClick={handleNext}
               />
            </div>
         </div>
      </div>
   );
};

export default CardSlider;
