import React from "react";
import about from "../assets/images/about2.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="md:w-screen flex justify-center items-center px-20 py-4"
      id="about"
    >
      <div className="w-full h-full grid md:grid-cols-[1fr_2fr]" id="home">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={about}
            alt="hero"
            className="w-60 outline-8 outline-brown border-8 border-white"
          />
        </div>

        <div className="w-full h-full grid md:grid-cols-2">
          <motion.div
            className="md:w-[50vw] w-[70vw] flex flex-col justify-center  gap-5 items-start md:px-20 md:py-4 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="md:text-4xl text-2xl text-left w-full font-bold text-black mt-8">
              ABOUT
            </h1>
            <span className="text-black md:text-left text-left text-sm leading-7">
              Welcome to <b className="text-brown">Fluff N Stuff</b>, your
              ultimate destination for high-quality stuffed toys and plush
              creations! We are a passionate team dedicated to bringing joy and
              comfort through our carefully curated collection of adorable and
              huggable toys. Based in <b className="text-brown">Lahore</b>, our
              warehouse is conveniently located on{" "}
              <b className="text-brown">Band Road, Faisal Movers</b>, ensuring
              quick and reliable delivery to all our customers. Since our launch
              in <b className="text-brown">August 2024</b>, we've been committed
              to offering a wide range of stuffed animals that are perfect for
              gifting, cuddling, or simply brightening up any room. Whether
              you're looking for a soft companion for a child or a unique plush
              to add to your collection,{" "}
              <b className="text-brown">Fluff N Stuff</b> has something for
              everyone. Our toys are made with love, care, and the highest
              standards of quality, ensuring that every cuddle feels just right.
              Join us on this fluffy journey, and let us bring a smile to your
              face, one stuffed toy at a time!
            </span>
            <a
              href="https://wa.me/+923224269380?text=Welcome%20To%20Fluffn%27%20Stuff%2C%20purchase%20quality%20teddy%20bears%20up%20to%2020%25%20off%21"
              target="_blank"
            >
              <button className="bg-brown text-white p-4 font-bold tracking-widest cursor-pointer text-xs rounded-4xl hover:bg-white hover:border-2 hover:border-brown hover:text-brown">
                Contact Now
              </button>
            </a>
          </motion.div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
