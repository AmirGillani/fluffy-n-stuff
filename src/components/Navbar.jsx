import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/images/logo 3.jpeg";

export default function Navbar() {

  function handleClick(e, href) {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      //adjusts the scroll position by subtracting 85 pixels.

      const offset = -85;

      //retrieves the distance from the top of the viewport to the top of targetElement

      const elementPosition = targetElement.getBoundingClientRect().top;

      //calculates the final scroll position by adding the element's position, the current scroll position (window.scrollY), and the offset

      const offsetPostion = elementPosition + window.scrollY + offset;

      //scrolls the window to the calculated offsetPosition with smooth scrolling behavior ("smooth").

      window.scrollTo({
        top: offsetPostion,
        scroll: "smooth",
      });
    }

    
  }

  return (
    <div className="shadow fixed top-0 left-0 right-0 z-30">
      <div className="bg-brown md:flex hidden justify-between px-20 py-2">
        <div className="w-[30%] flex gap-3">
          <a href="https://www.facebook.com/FluffnStuff2">
            <FaFacebook
              className="text-white cursor-pointer hover:text-gray-200"
              size={18}
            />
          </a>
          <a href="https://wa.me/+923224269380?text=Welcome To Fluffn' Stuff purchase quality teddy bear upto 20% off">
            <FaPhoneAlt
              className="text-white cursor-pointer hover:text-gray-200"
              size={18}
            />
          </a>
          <a href="mailto:fluffnstuffteddy@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about your products.">
            <MdEmail
              className="text-white cursor-pointer hover:text-gray-200"
              size={18}
            />
          </a>
        </div>
        <div className="w-[30%]">
          <span className="text-xs text-white">
            SHIPPING ALL OVER PAKISTAN & DISCOUNT UP TO 20% OFF
          </span>
        </div>
      </div>
      <div
        className="bg-white px-20 py-4 flex gap-2 justify-between items-center"
        id="strip2"
      >
        <div className="w-[20%] flex" onClick={(e)=>handleClick(e,"#home")} >
          <img src={Logo} alt="logo" className="md:w-20 w-16 cursor-pointer" />
        </div>
        <div className="md:w-[30%] w-[80%]">
          <ul className="list-none flex justify-between gap-1">
            <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown" onClick={(e)=>handleClick(e,"#home")}>
              HOME
            </li>
            <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown" onClick={(e)=>handleClick(e,"#product")}>
              PRODUCTS
            </li>
            <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown" onClick={(e)=>handleClick(e,"#about")}>
              ABOUT
            </li>
            <li className="cursor-pointer font-semibold text-xs md:text-lg hover:text-brown" onClick={(e)=>handleClick(e,"#contact")}>
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
