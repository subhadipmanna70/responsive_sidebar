import React from "react"
import { useState } from "react"
import { AiOutlineArrowLeft,AiOutlineHome } from 'react-icons/ai'
const logo = require("./assets/logo.webp")
import {FcAbout} from 'react-icons/fc'

import {TbArrowBigRightLine}  from 'react-icons/tb'


const Home = () => {


  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72":"w-20"
        } duration-300 w-72 h-screen p-5 pt-6 relative bg-blue-900`}
      >
        <AiOutlineArrowLeft
          onClick={() => setOpen(!open)}
          className={`-right-3 top-96 absolute h-[25px] w-[25px]  border-solid cursor-pointer border-2 border-blue-900 rounded-full bg-white duration-500  ${
            !open && "rotate-180"
          }`}
        />
        <div className=" flex items-center gap-x-4">
          <img src={logo} className="h-[40px] w-[40px] cursor-pointer duration-500 rounded-xl border-4 border-white " alt=""></img>
        <h1 className={`font-medium origin-left duration-300 ${!open && 'scale-0' }`}>IEM AIWRITER</h1>
        </div>
        <ul className="pt-6">
          
  
        <li  className=" text-sm gap-x-4 text-left items-center cursor-pointer p-2 hover:bg-light-white">
        <AiOutlineHome className="h-[20px] w-[20px]" />
        <span className="flex text-white">Home</span>
        </li>
        <li  className=" text-sm gap-x-4 text-left cursor-pointer items-center p-2">
        <TbArrowBigRightLine className=" h-[20px] w-[20px]"/>
        <span className="flex text-white">Catagories</span>
        </li>
        <li  className=" text-sm gap-x-4 text-left items-center cursor-pointer p-2">
        <FcAbout className="h-[20px] w-[20px]"/>
        <span className="flex text-white">About</span>
        </li>          
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>dashboard</h1>
      </div>
    </div>
  );
};
export default Home;