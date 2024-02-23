'use clinet'
import React from "react";
import { UserRound, MapPin, Phone } from "lucide-react";

const Header = () => {
  



  return (
    <div className={`bg-red-800 h-auto w-full`}>
      <div className="flex md:flex space-x-5 md:mt-0 justify-evenly ml-5 mr-5">
        <div className="flex items-center">
          <UserRound className="h-8 w-8 text-white" />
          <p className="text-white ml-2 font-semibold">Follow Us</p>
        </div>
        <div className="flex items-center">
          <Phone className="h-8 w-8 text-white" />
          <p className="text-white ml-2 font-semibold flex">CALL NOW:</p>
        </div>
        <div className="flex  items-center">
          <div className="flex items-center ">
            <MapPin className="h-8 w-8 text-white" />
            <p className="text-white ml-2 font-semibold">Location</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-evenly ml-9 mr-5">
        <div className="flex items-center space-x-1 ml-5">
          <img
            className="h-5 w-5 flex-col "
            src="assets/icons/facebook.png"
            alt="sk"
          />
          <img
          
            className="h-5 w-5 flex-col"
            src="assets/icons/twitter.png"
            alt="sfs"
          />
          <img
            className="h-5 w-5 flex-col"
            src="assets/icons/instagram.png"
            alt="s"
          />
          <img
            className="h-5 w-5 flex-col"
            src="assets/icons/linkedin.png"
            alt="ss"
          />
          <img
            className="h-5 w-5 flex-col"
            src="assets/icons/youtube.png"
            alt="dd"
          />
        </div>
        <div className=" flex text-center ml-10">
            <span className=" text-white font-extrabold  animate-pulse xl:text-2xl md:text-2xl">+1 (347) 466-3991</span>
        </div>
        <div className="ml-10 ">
            <span className="text-white xl:text-2xl md:text-2xl">
            New York, USA
            </span>
          </div>

        

      </div>

      <div className="flex justify-between items-center mt-11 border shadow-md">
        <div className="bg-white h-20 w-full flex items-center">
          <div className="ml-10 mr-5">
            <img
              src="assets/icons/hero.jpeg"
              className="h-16 w-16 mr-5"
              alt="sk"
            />
          </div>
          <div className="flex flex-wrap justify-around items-center flex-grow ">
            <a href="#" className="m-3 float-left hidden xl:block md:block">
              HOME
            </a>
            <a href="#" className="m-3 hidden xl:block md:block">
              ABOUT US
            </a>
            <a href="#" className="m-3 hidden xl:block md:block">
              SOLUTIONS
            </a>
            <a href="#" className="m-3 hidden xl:block md:block">
              SERVICES
            </a>
            <a href="#" className="m-3 hidden xl:block md:block">
              LOCATIONS
            </a>
            <a href="#" className="m-3 hidden xl:block md:block">
              CONTACT
            </a>
          </div>
          <div className="mr-10 md:p-4 md:m-2 ml-5">
            <button className="bg-red-800 text-white p-3 m-1">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
