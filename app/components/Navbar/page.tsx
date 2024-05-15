"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "../../images/logo.png";
type Props = {};

const Navbar = (props: Props) => {
  const [isopen, Setisopen] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-8 items-center py-6 lg:px-24">
        <section className="">
          <div className="flex items-center gap-5  md:gap-40">
            <div
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => Setisopen(true)}
            >
              <IoMenu />
            </div>

            <Image src={Logo} alt="logo" className="h-14 w-1/2" />
            <div className=" items-center gap-10 hidden md:flex">
              <p>Product</p>
              <p>Resources</p>
              <p>Demo</p>
              <p>Pricing</p>
              <p>FreeTrail</p>
            </div>
          </div>
        </section>
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isopen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute top-0 left-0 h-screen p-8 gap-8 z-[100] flex">
            <div
              className="mt-0 mb-8 text-3xl cursor-pointer"
              onClick={() => Setisopen(false)}
            >
              <IoClose />
            </div>

            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Service</p>
          </section>
        </div>
        <section className="">
          <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-10 py-2.5 mt-4 mr-5">
            Login
          </button>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
