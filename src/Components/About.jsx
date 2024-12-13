import React from "react";
import logo2 from "../assets/bitmasbanner.jpg";
import Logo from "../assets/bitcoinchristmaslogo-removebg-preview.png";


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
             This festive season, $BITMAS is here to spread cheer and rewards in BTC! 🎄🪙 With our limited supply of 1,000,000 tokens, renounced contract, 
              and locked liquidity, $BITMAS ensures transparency and trust for all holders. Designed for the crypto enthusiast,
            </p>
            <p className=" text-white font-primary">
              our tokenomics offer a 4% BTC reward on every transaction—helping you grow your Bitcoin stash while celebrating the holidays!
            </p>
            <p className=" text-white font-primary">
             Tis the season for Bitcoin rewards! With $BITMAS, you’re not just celebrating Christmas—you’re earning BTC too! Our project is built for security, fun, and rewards, with 4% of every transaction going straight to your Bitcoin wallet. Combined with a locked LP, renounced contract, and top-tier marketing,
              $BITMAS is the festive crypto gift you didn’t know you needed. Let’s HODL our way to the moon together! 🎄✨
            </p>
          </div>
        </article>
        <img src={logo2} alt="" className="md:w-[25rem] " />
      </div>
    </section>
  );
};

export default About;
