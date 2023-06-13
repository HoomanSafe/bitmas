import React from "react";
import Raptor from "../assets/raptor.png";

const Hero = () => {
  return (
    <section className="py-[50px] w-full hero">
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-10">
        <article className="flex flex-col gap-6 items-start">
          <h1 className="md:text-7xl text-5xl text-white">
            welcome to philoso <span className="">raptor</span>
          </h1>
          <h2 className="text-3xl text-white"> an ambitious endeavor</h2>
          <p className=" text-white font-primary">
            In the vast landscape of blockchain technology, Ethereum has
            established itself as a leading platform for decentralized
            applications and smart contracts.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href=""
              className="bg-green px-9 py-4 text-white rounded-xl text-2xl border-4 border-black capitalize hover:bg-white hover:text-green hover:border-green font-secondary"
            >
              buy now
            </a>
            <a
              href=""
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
