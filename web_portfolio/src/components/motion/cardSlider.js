import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./cardSlider.module.css";
import Card from "../../components/cards/cards.js";
import { CircleButton } from "../button/button.js";
import arrow from "../../img/arrow.svg";

const CardSlider = ({ cards }) => {
   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

   const handleNext = () => {
      setPositionIndexes(prevIndexes => {
         const updatedIndexes = prevIndexes.map(
            prevIndex => (prevIndex + 1) % 5
         );
         return updatedIndexes;
      });
   };

   const handleBack = () => {
      setPositionIndexes(prevIndexes => {
         const updatedIndexes = prevIndexes.map(
            prevIndex => (prevIndex + 4) % 5
         );
         return updatedIndexes;
      });
   };

   const positions = ["center", "left1", "left", "right", "right1"];

   const cardVariants = {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-80%", scale: 0.7, zIndex: 3 },
      left: { x: "0", scale: 0.5, zIndex: 2 },
      right: { x: "0%", scale: 0.5, zIndex: 1 },
      right1: { x: "80%", scale: 0.7, zIndex: 3 },
   };

   return (
      <div className={styles.cardSliderContainer}>
         {cards.map((card, index) => (
            <motion.div
               key={index}
               initial="center"
               animate={positions[positionIndexes[index]]}
               variants={cardVariants}
               transition={{ duration: 0.5 }}
               className={styles.cardWrapper}
            >
               <Card {...card} />
            </motion.div>
         ))}
         <div className="flex flex-row gap-3">
            <div className={styles.rightArrow}>
               <CircleButton
                  color={"transparent"}
                  imageSize={"100%"}
                  imageUrl={arrow}
                  onClick={handleBack}
               />
            </div>
            <div className={styles.leftArrow}>
               <CircleButton
                  color={"transparent"}
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
