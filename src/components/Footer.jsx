import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className="flex flex-col bottom-0 left-0 right-0" id="contact">
      <Contact />
      <div className="bg-black px-20 py-4 flex md:flex-row flex-col gap-6 text-xs justify-center items-center w-full">
        <span className="text-white">
          FLUFFYN' STUFF - STUFFED WITH LOVE
        </span>
        <span className="text-white">
          Copyright 2024 all rights reserved
        </span>
      </div>
    </div>
  );
}
