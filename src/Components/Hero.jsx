import React from "react";
import Raptor from "../assets/bitcoinchristmaslogo-removebg-preview.png";

const Hero = () => {
  return (
    <section className="py-[50px] w-full hero" id="hero">
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-10">
        <article className="flex flex-col gap-6 items-start">
          <h1 className="md:text-7xl text-5xl text-white hero-header">
            welcome to Bitcoin <span className="">Christmas</span>
          </h1>
          <h2 className="text-3xl text-white"> an ambitious for BTC</h2>
          <p className=" text-white font-primary">
           With a vibrant community and robust marketing plan, we’re ready to make this Christmas unforgettable for every investor. 
            Join the $BITMAS family today and be part of a revolution where holiday spirit meets crypto gains. 🎁🚀
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://pancakeswap.finance/?outputCurrency=0x7Ae700359030F4E72449DE0b3E6372dfF01EA512"
              className="bg-green px-9 py-4 text-white rounded-xl text-2xl border-4 border-black capitalize hover:bg-white hover:text-green hover:border-green font-secondary"
            >
              buy now
            </a>
            <a
              href="https://www.dextools.io/app/en/bnb/pair-explorer/0xf9d9869eaedcab7048ce4f423126bcc42df5dd30?t=1734090718464"
              className="bg-white px-9 py-4 text-green rounded-xl text-2xl border-4 border-black capitalize hover:bg-white hover:text-green hover:border-green font-secondary"
            >
              view chart
            </a>
          </div>
        </article>
        <img src={Raptor} alt="" />
      </div>
    </section>
  );
};

export default Hero;
