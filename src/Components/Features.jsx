import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Features = () => {
  const supply = useRef(null);
  const maxWallet = useRef(null);
  const tax = useRef(null);

  useEffect(() => {
    if (supply.current) {
      const countUp = new CountUp(supply.current, 1000000, {
        decimal: ".",
        enableScrollSpy: true,
        duration: 2,
      });
      const maxUp = new CountUp(maxWallet.current, 4, {
        decimal: ".",
        enableScrollSpy: true,
        duration: 2,
      });
      const taxUp = new CountUp(tax.current, 7, {
        decimal: ".",
        enableScrollSpy: true,
        duration: 2,
      });

      if (!taxUp.error) {
        countUp.start();
      } else {
        console.error(taxUp.error);
      }

      if (!maxUp.error) {
        countUp.start();
      } else {
        console.error(maxUp.error);
      }

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  });
  return (
    <section className="py-[50px] bg-wite">
      <div className="container flex flex-col gap-5 justify-center items-center">
        <h1 className="md:text-7xl text-5xl">tokenomicss</h1>

        <div className="flex gap-14 justify-center mt-10 flex-wrap">
          <article className="flex flex-col justify-center items-center">
            <h2 className="text-3xl" ref={supply}></h2>
            <h4 className="text-xl">supply</h4>
          </article>
          <article className="flex flex-col justify-center items-center">
            <h2 className="text-3xl" ref={maxWallet}></h2>
            <h4 className="text-xl">Rewards $BTC</h4>
          </article>
          <article className="flex flex-col justify-center items-center">
            <h2 className="text-3xl" ref={tax}></h2>
            <h4 className="text-xl">tax</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
