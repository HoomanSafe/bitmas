import React from "react";
import logo2 from "../assets/logo2.png";
import Logo from "../assets/raptor.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-green text-white">
      <div className="container grid gap-10 lg:grid-cols-2 justify-between items-center">
        <article className="">
          <h1 className="md:text-7xl text-5xl flex items-center gap-3">
            about <img src={Logo} className="w-[3rem]" alt="" />
          </h1>

          <div className="flex mt-10 flex-col gap-5 max-w-[700px]">
            <p className=" text-white font-primary">
              In the vast landscape of blockchain technology, Ethereum has
              established itself as a leading platform for decentralized
              applications and smart contracts.
            </p>
            <p className=" text-white font-primary">
              Philosoraptor is an ambitious endeavor that merges the realms of
              philosophy and blockchain technology, aiming to revolutionize the
              way we contemplate and engage with philosophical concepts. Drawing
              inspiration from the enigmatic Philosoraptor meme, this crypto
              project aims to provide a unique and thought-provoking experience
              to users.
            </p>
            <p className=" text-white font-primary">
              At its core, Philosoraptor leverages Ethereum's smart contract
              functionality to create an immersive ecosystem where users can
              explore philosophical ideas, engage in intellectual discussions,
              and even participate in philosophical competitions. Through a
              decentralized application (DApp) built on Ethereum, users can
              access a range of features and services designed to enhance their
              philosophical journey.
            </p>
          </div>
        </article>
        <img src={logo2} alt="" className="md:w-[25rem] " />
      </div>
    </section>
  );
};

export default About;
