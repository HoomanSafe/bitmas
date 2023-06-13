import React from "react";
import { BsSend } from "react-icons/bs";
import { CgTwitter, CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-green text-white">
      <div className="container text-center flex justify-center gap-6 items-center flex-col">
        <div className="flex items-center gap-4">
          <a href="" className="text-4xl">
            <BsSend />
          </a>
          <a href="" className="text-4xl">
            <CgTwitter />
          </a>
          <a href="" className="text-4xl">
            <CgMail />
          </a>
        </div>
        <a href="" className="text-4xl capitalize font-secondary">
          $philosoraptor
        </a>
        <p className=" text-white font-primary max-w-[700px]">
          In the vast landscape of blockchain technology, Ethereum has
          established itself as a leading platform for decentralized
          applications and smart contracts.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
