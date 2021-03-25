import React from "react";
import subr from "../Images/subr.jpeg";
import freud from "../Images/freud.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { trainingVariants } from "./Trainings";

const freudVariants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Header: React.FC = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={trainingVariants}
      exit="exit"
      className="header"
    >
      <motion.img
        variants={freudVariants}
        drag
        initial="initial"
        animate="animation"
        className="freud"
        src={freud}
        alt=""
      />
      <div className="header__name-container">
        <motion.img
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          className="header__name-container__photo"
          src={subr}
          alt=""
        />
        <h1>Büşra Emül</h1>
        <h2>Uzman Psikolojik Danışman</h2>
      </div>
      <nav className="header__navbar">
        <ul className="header__navbar__nav-list">
          <Link to="/hakkimda">
            <li>Hakkımda</li>
          </Link>
          <Link to="/egitimler">
            <li>Eğitimler</li>
          </Link>
          <li>Özgeçmiş</li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
