import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import SplitType from "split-type";

const App = () => {

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
