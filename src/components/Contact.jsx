import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="flex flex-col" id="contact">
      <div className="bg-brown px-20 py-4 grid md:grid-cols-3 text-white">
        <div className="flex flex-col justify-center items-start">
          <span className="text-lg font-semibold my-4">Contact Info</span>

          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-full grid grid-cols-[1fr_11fr] gap-2">
              <div className=" flex justify-start items-center cursor-pointer">
                <FaPhoneAlt size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-light">
                  03224269380
                </span>
                <span className="text-sm font-light">
                  03254498754
                </span>
              </div>
            </div>

            <div className="w-full grid grid-cols-[1fr_11fr] gap-2">
              <div className=" flex justify-start items-center cursor-pointer">
                <MdEmail size={20} />
              </div>
              <div>
                <span className="text-sm font-light">
                  fluffnstuffteddy@gmail.com
                </span>
              </div>
            </div>

            <div className="w-full grid grid-cols-[1fr_11fr] gap-2">
              <div className=" flex justify-start items-center cursor-pointer">
                <FaFacebook size={20} />
              </div>
              <div>
                <span className="text-sm font-light">
                  https://wwww.facebook.com/FluffnStuff2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start self-start">
          <span className="text-lg font-semibold my-4">Location Info</span>

          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-full grid grid-cols-[1fr_11fr] gap-2">
              <div className=" flex justify-start items-center cursor-pointer">
                <FaLocationDot size={20} />
              </div>
              <div>
                <span className="text-sm font-light">
                  Band road faisal movers Lahore
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start ">

            <a href="https://wa.me/+923224269380?text=Welcome%20To%20Fluffn%27%20Stuff%2C%20purchase%20quality%20teddy%20bears%20up%20to%2020%25%20off%21">
            <button className="bg-white text-brown p-4 font-bold tracking-widest cursor-pointer text-sm rounded-4xl hover:bg-brown hover:border-2 hover:border-white hover:text-white my-4">Contact On Watsapp</button>
            </a>
        
        </div>

      </div>
      
    </div>
  );
}
