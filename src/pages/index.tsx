import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { Box, Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      {/* <Projects />
      <Contact /> */}
    </>
  );
};

export default Home;
