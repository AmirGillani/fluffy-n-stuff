import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import Logo from "../assets/images/logo 3.jpeg";

export default function Navbar() {
  return (
        <div className="shadow fixed top-0 left-0 right-0 z-30">
          <div className="bg-brown md:flex hidden justify-between px-20 py-2">
            <div className="w-[30%] flex gap-3">
              <FaFacebook className="text-white cursor-pointer hover:text-gray-200" size={18} />
              <FaInstagramSquare className="text-white cursor-pointer hover:text-gray-200" size={18} />
              <FaSnapchat className="text-white cursor-pointer hover:text-gray-200" size={18} />
            </div>
            <div className="w-[30%]">
              <span className="text-xs text-white">
                SHIPPING ALL OVER PAKISTAN & DISCOUNT UP TO 12% OFF
              </span>
            </div>
          </div>
          <div className="bg-white px-20 py-4 flex gap-2 justify-between items-center" id='strip2'>
            <div className="w-[20%] flex">
              <img src={Logo} alt="logo" className="md:w-20 w-16 cursor-pointer" />
            </div>
            <div className="md:w-[30%] w-[80%]">
              <ul className="list-none flex justify-between gap-1">
                <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown">HOME</li>
                <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown">PRODUCTS</li>
                <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown">ABOUT</li>
                <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown">CONATCT</li>
              </ul>
            </div>
          </div>
        </div>
  )
}
