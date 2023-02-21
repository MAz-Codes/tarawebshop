import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
  }, [location]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    duration: 0.5,
    delay: 0.2,
  };

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <motion.div
          initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            onAnimationStart={() => setIsLoaded(true)}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            onAnimationStart={() => setIsLoaded(true)}
          >
            <About />
          </motion.div>
        } />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
