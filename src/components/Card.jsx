import React from "react";

import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice.js";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[400px] bg-zinc-800 p-[14px] rounded-3xl shadow-[-8px_-8px_15px_rgba(249,115,22,0.2),10px_10px_10px_rgba(0,0,0,0.3),inset_5px_5px_5px_rgba(0,0,0,0.4),inset_-5px_-5px_5px_rgba(249,115,22,0.2)] hover:scale-105 transition-all flex flex-col gap-3">
      <div className="w-[100%] h-[60%] rounded-3xl overflow-hidden">
        <img
          src={image}
          className="object-cover rounded-2xl shadow-lg-white/20"
        />
      </div>
      <div className="text-lg font-semibold text-zinc-300 pt-2">{name}</div>

      <div className="w[100%] flex items-center justify-between">
        <div className="text-orange-500 font-bold text-md">{price}/-</div>
        <div className="flex items-center gap-2 text-orange-500 font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="relative w-full p-3 font-semibold border-2 border-orange-500 overflow-hidden group rounded-full cursor-pointer ounline-none"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success("Dish added to cart successfully!");
        }}
      >
        <span className="absolute inset-0 bg-orange-500 translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400 outline-none"></span>
        <span className="relative z-10 text-orange-500 group-hover:text-white transition-colors duration-400">
          Add to dish
        </span>
      </button>
    </div>
  );
}

export default Card;
