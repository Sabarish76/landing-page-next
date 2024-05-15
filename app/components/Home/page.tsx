/* eslint-disable react/no-unescaped-entities */
"use client";
import avatar from "../../images/avatar5.png";
import avatar4 from "../../images/avatar4.jpg";
import avatar2 from "../../images/avatar2.jpg";
import avatar3 from "../../images/avatar3.jpg";
import avatar1 from "../../images/billing.jpg";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

const Main = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-8 md:px-24 py-8  overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center my-10 py-20">
          <h1 className="text-center font-bold text-4xl lg:w-[90%] md:text-5xl">
            Zero Worry about Compliance
          </h1>
          <p className="my-10 text-center lg:ml-[11%] lg:w-[70%]">
            Instant Notifcations on Renewals and Appointment Instant
            Notifications on Updates.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-5   md:w-[70%] mx-16 md:justify-between">
            <button
              disabled
              className="text-white cursor-none flex justify-around items-center bg-gray-800  font-medium  py-2.5 w-40 my-3 "
            >
              <p className="bg-gray-800 pl-8">Android</p>
              <IoLogoAndroid />
            </button>
            <button
              disabled
              className="text-white flex justify-around cursor-none items-center bg-gray-800  font-medium text-sm py-2.5  w-40"
            >
              <p className="bg-gray-800 pl-8">IOS</p>
              <FaApple />
            </button>
          </div>
        </div>
        <div className="relative -z-50 mt-16">
          {/* <div>
            {" "}
            <Image src={image} alt="img" className="w-[76%] h-auto lg:ml-48" />
          </div> */}
          <div
            className="bg-white rounded-lg shadow-2xl h-fit lg:w-[55%] p-2 flex justify-around items-center my-5 lg:absolute lg:left-[47%] left-0 lg:-top-16"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="font-bold text-sm py-1">CA & CS</h1>
              <p className="text-xs">
                Looking for a product to streamline all your work.Your Solution
                is here!
              </p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
          <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>

            <div className="w-24 h-16 rounded-full overflow-hidden">
              <Image
                src={avatar}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-2xl h-fit lg:w-[60%] p-2 flex justify-around items-center my-5 lg:absolute lg:left-20 left-0 lg:top-10"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="font-bold text-sm py-1">Compliance Management</h1>
              <p className="text-xs">
                Don't chase after the Company Act 2013, get every compliance at
                your fingertips with our dashboard
              </p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
          <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>

            <div className="w-32 h-16 rounded-full overflow-hidden">
              <Image
                src={avatar2}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-2xl h-fit lg:w-[55%] p-2 flex justify-around items-center my-5 lg:absolute  lg:top-36 lg:left-80"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="font-bold text-sm py-1">
                Secretarial ticket management
              </h1>
              <p className="text-xs">
                Unlock top-tier ticket services for seamless secretarial tasks
                management
              </p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
          <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="w-24 h-16 rounded-full overflow-hidden">
              <Image
                src={avatar3}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-2xl h-fit lg:w-[60%] p-2 flex justify-around items-center my-5 lg:absolute lg:left-20 lg:top-[52%]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="font-bold text-sm py-1">Compliance GPT</h1>
              <p className="text-xs">
                A highly trained GPT to generate your board meeting documents
                and ensure compliance with a single click
              </p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
          <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="w-32 h-16 rounded-full overflow-hidden">
              <Image
                src={avatar4}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-2xl h-fit lg:w-[55%] p-2 flex justify-around items-center my-5 lg:absolute  lg:top-[73%] lg:left-80"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="font-bold text-sm py-1">Billing Management</h1>
              <p className="text-xs w-[95%]">
                Stop struggling to monitor your bills. organize and send
                reminders with just one click
              </p>
              {/* <p className="border-b h-3 border-black w-[100%] "></p> */}
              <div className="">
                {" "}
                {/* <p className="text-xs mt-1">Status:Re-appointment</p>
          <p className="text-xs mt-1">5/9/2024</p> */}
              </div>
            </div>
            <div className="w-28 h-16 rounded-full overflow-hidden">
              <Image
                src={avatar1}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
