import React from "react";
import trainings from "../Data/Trainings";
import { motion } from "framer-motion";
export const trainingVariants = {
  hover: {
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    maxHeight: "25rem",
  },
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Trainings: React.FC = () => {
  return (
    <motion.div
      className="trainings"
      initial="hidden"
      animate="visible"
      variants={trainingVariants}
      exit="exit"
    >
      {trainings.map((el) => {
        const { name, organization, date, explanation } = el;

        return (
          <motion.div
            variants={trainingVariants}
            whileHover="hover"
            className="training"
            key={el.name}
          >
            <h3 className="heading">{name}</h3>
            <div className="details">
              {organization && (
                <p>
                  <i>{organization}</i>
                </p>
              )}
              {date && <p>{date}</p>}
              {explanation && <p>{explanation}</p>}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Trainings;
