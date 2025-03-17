import React from "react";
import Card from "./Card";
import { PRODUCT } from "../assets/constant/Product";
export default function Products() {
  return (
    <div className="w-full px-20 flex-col justify-center items-center py-10" id="product">
      <h2 className="font-bold text-4xl text-center mb-8">FEATURED PRODUCTS</h2>
      <h2 className="font-medium text-lg text-gray-900 text-center mb-8">
        Each teddy bear is avaliable in 8 different colors which are
        <span className="text-red-500 font-semibold"> red</span> ,
        <span className="text-yellow-500 font-semibold"> yellow</span>,
        <span className="text-brown font-semibold"> brown</span>,
        <span className="text-pink-300 font-semibold"> baby pink</span>,
        <span className="text-pink-600 font-semibold"> shocking pink</span>,
        <span className="text-blue-300 font-semibold"> sky blue</span>,
        <span className="text-[#FFE5B4] font-semibold"> peach</span>,
        <span className="text-[#EECCB7] font-semibold"> skin</span> 
      </h2>
      <div className="grid md:grid-cols-4 gap-4 w-full h-auto">
        {PRODUCT.map((product) => (
          <Card
            size={product.size}
            price={product.price}
            img={product.img}
            discount={product.discount}
            afterDiscount={product.afterDiscount}
          />
        ))}
      </div>
    </div>
  );
}
