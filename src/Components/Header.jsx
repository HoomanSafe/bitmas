import React, { useEffect, useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);

  function Open() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const special = document.querySelectorAll(".spec").forEach((ele) => {
      ele.addEventListener("click", () => {
        setOpen(false);
      });
    });
  }, []);
  return (
    <header className=" w-full ">
      <div className="container flex justify-center items-center">
        <nav className="flex shadow bg-white px-4 border-2 border-black rounded-b-2xl border-t-0 py-3 w-full  justify-between items-center">
          <a href="" className="text-4xl capitalize font-secondary">
            $philosoraptor
          </a>
          <button
            onClick={Open}
            className="p-3 block md:hidden hover:bg-white hover:text-green hover:border-black transition-[3s] border-2  border-black bg-green text-white rounded-lg"
          >
            <CgMenuRightAlt className="text-xl" />
          </button>
          <div
            className={`flex   z-50  ${
              open ? "left-0" : "-left-[100vw]"
            }  flex-col lg:flex-row h-screen bg-white  lg:bg-transparent justify-center lg:h-max lg:w-max top-0 w-11/12  fixed lg:static items-center gap-5 font-secondary`}
          >
            <button
              onClick={Open}
              className="p-3 absolute top-5 right-5 block md:hidden hover:bg-white hover:text-green hover:border-black transition-[3s] border-2  border-black bg-green text-white rounded-lg"
            >
              <CgClose className="text-xl" />
            </button>
            <a
              href=""
              className="text-2xl spec capitalize text-gray-400 hover:text-green"
            >
              home
            </a>
            <a
              href=""
              className="text-2xl spec capitalize text-gray-400 hover:text-green"
            >
              about
            </a>
            <a
              href=""
              className="text-2xl spec capitalize text-gray-400 hover:text-green"
            >
              tokenomics
            </a>
            <a
              href=""
              className="text-2xl  speccapitalize text-gray-400 hover:text-green"
            >
              roadmap
            </a>
            <a
              href=""
              className="text-2xl  spec capitalize text-gray-400 hover:text-green"
            >
              faq
            </a>
          </div>
          <a
            href=""
            className="bg-green px-9 py-4 text-white rounded-xl hidden md:block text-2xl border-4 border-black capitalize hover:bg-white hover:text-green hover:border-green font-secondary"
          >
            buy now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
