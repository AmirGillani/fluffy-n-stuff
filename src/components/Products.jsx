import React from "react";
import Card from "./Card";
import { PRODUCT } from "../assets/constant/Product";
import { motion } from "framer-motion";
export default function Products() {
  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, // Container fades in over 1 second
        staggerChildren: 0.7, // Each child will stagger by 0.7 seconds
      },
    },
  };
  
  const itemVarient = {
    hidden: { x: -100, opacity: 0 }, // Initially, each item is slightly off-screen and invisible
    visible: {
      x: 0, // Move to its original position (slide in from left)
      opacity: 1, // Make the item visible
      transition: {
        duration: 1, // Slide in over 1 second
      },
    },
  };
  ;

  return (
    <div
      className="w-full px-20 flex flex-col justify-center items-center py-10"
      id="product"
    >
      <h2 className="font-bold text-4xl text-left w-[80%] mb-8">FEATURED PRODUCTS</h2>
      <h2 className="font-light text-sm w-[80%] leading-7 text-gray-900 text-left mb-8">
        At Fluffly N Stuff, we take pride in offering the softest and most
        adorable teddy bears, designed to be your perfect cuddle companion. Each
        teddy bear is crafted with love, ensuring a delightful and comforting
        experience with every hug. Whether you’re looking for a gift or simply
        want to add a cozy friend to your collection, our teddy bears are the
        perfect choice. To make sure there’s a perfect match for everyone, our
        teddy bears come in 8 vibrant colors: <br />
        <br />
        <br />
        <ul className="w-full text-left flex flex-col gap-2">
          <li>
            {" "}
            <span className="text-sm font-semibold text-brown">Red –</span> Bold
            and passionate, a classic favorite!
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">Yellow –</span>{" "}
            Bright and cheerful, bringing sunshine wherever it goes.
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">Brown –</span> A
            warm, earthy tone for those who love cozy vibes.
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">
              Baby Pink –
            </span>{" "}
            Soft, sweet, and perfect for those who love pastel hues.
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">
              Shocking Pink –
            </span>{" "}
            Bold, vibrant, and full of energy!
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">Sky Blue –</span>{" "}
            Calm, soothing, and refreshing, just like a clear sky.
          </li>
          <li>
            {" "}
            <span className="text-sm font-semibold text-brown">
              Peach –
            </span>{" "}
            Gentle and charming, with a soft touch of elegance.
          </li>
          <li>
            <span className="text-sm font-semibold text-brown">Skin –</span> A
            neutral and natural tone that’s as versatile as it is cute.
          </li>
        </ul>
      </h2>
      <motion.div
        className="grid md:grid-cols-3 gap-4 w-full h-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: true }}
      >
        {PRODUCT.map((product) => (
          <div
            initial="hidden"
            whileInView="visible"
            variants={itemVarient}
            viewport={{ once: true }}
          >
            <Card
              type={product.type}
              size={product.size}
              price={product.price}
              img={product.img}
              discount={product.discount}
              afterDiscount={product.afterDiscount}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
