import React, { useState } from "react";
import stars from "../assets/images/stars.png";
import {motion} from "framer-motion"

export default function Card({size,price,img,discount, afterDiscount,type}) {

    const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:h-[70vh] h-[40vh] gap-4 bg-white hover:shadow-2xl rounded-2xl cursor-pointer">
      <div className="h-[70%] relative">
        <img
         onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          src={img}
          alt="product"
          className="absolute w-full h-full top-0 bottom-0 left-0 right-0 z-10 rounded-t-2xl cursor-pointer"
        />
        {
            hovered &&  <motion.div className="bg-brown text-white p-3 text-center  justify-center items-center flex absolute bottom-0 left-0 right-0 z-20"
            initial={{scaleY:0}}
            whileInView={{scaleY:1}}
            transition={{duration:0.5}}
            exit={{scaleY:0}}
            >
            <span>{afterDiscount} RS AFTER {discount} % DISCOUNT</span>
          </motion.div>
        }
       
      </div>
      <div className="h-[30%] flex flex-col justify-center items-center">
        <span className="text-gray-500 text-xs underline">{type}</span>
        <span className=" text-lg">{size}</span>
        <span className="text-green-500">{price}</span>
        <img src={stars} alt="stars" className="w-[50%] h-20" />
      </div>
    </div>
  );
}
