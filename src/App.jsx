import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
