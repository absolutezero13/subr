import React from "react";
import Header from "./Components/Header";
import "./Sass/main.scss";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import About from "./Components/About";
import Trainings from "./Components/Trainings";
import { AnimatePresence } from "framer-motion";
const appVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const App: React.FC = () => {
  const location = useLocation();

  return (
    <motion.div
      variants={appVariants}
      initial="hidden"
      animate="visible"
      className="App"
    >
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact={true}>
            <Header />
          </Route>
          <Route path="/hakkimda" exact={true}>
            <About />
          </Route>
          <Route path="/egitimler" exact={true}>
            <Trainings />
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
};

export default App;
