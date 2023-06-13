import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // const hero = gsap.timeline({}).from(".hero-header", {
    //   opacity: 0,
    // });
  }, []);

  return (
    <section className="min-h-screen w-full bg-primary text-green font-secondary">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </section>
  );
};

export default App;
