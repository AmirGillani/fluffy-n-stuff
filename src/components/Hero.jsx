import React from "react";
import Navbar from "./Navbar";
import HeroPic from "../assets/images/Hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <Navbar />
      <div className="w-screen md:h-[130vh] h-[50vh] relative mt-8" id="home">
        <img src={HeroPic} alt="hero" className=" w-full h-full" />
        <div className="w-full h-full md:bg-black/30 bg-black/50 z-10 absolute top-0 left-0 right-0"></div>
        <div className="w-full h-full grid md:grid-cols-2 z-20 absolute top-0 left-0 right-0">
          <div></div>
          <motion.div
            className="w-full h-full flex flex-col justify-center  gap-5 items-center  p-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="md:text-4xl text-2xl font-bold text-white">
              GET YOUR TEDDY BEAR NOW!
            </h1>
            <span className="text-white md:text-left text-center">
              STUFFED WITH LOVE
            </span>
            <a href="https://wa.me/+923224269380?text=Welcome To Fluffn' Stuff purchase quality teddy bear upto 20% off">
              <button className="bg-brown text-white p-4 font-bold tracking-widest cursor-pointer text-xs rounded-4xl hover:bg-white hover:border-2 hover:border-brown hover:text-brown">
                Contact Now
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
