import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../redux/cartSlice";

function Card2({ name, image, id, price, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[130px] p-2 bg-zinc-900/50 rounded-2xl mt-5 flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[60%] h-full flex flex-col gap-7">
          <div className="text-lg font-semibold text-orange-500">{name}</div>
          <div className="w-[110px] h-[33px] bg-zinc-800 rounded-full flex">
            <button className="w-[30%] h-full bg-zinc-900/80 rounded-full text-red-500 text-xl font-bold transition-shadow duration-100 active:shadow-[-6px_0_8px_-1px_rgba(239,68,68,0.6)]">
              -
            </button>
            <span className="w-[40%] h-full flex justify-center items-center text-orange-500 text-lg font-bold">
              {qty}
            </span>
            <button className="w-[30%] h-full bg-zinc-900/80 rounded-full text-green-500 text-lg font-bold transition-shadow duration-100 active:shadow-[6px_0_8px_-1px_rgba(34,197,94,0.6)]">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-10 ">
        <span className="text-orange-500 font-bold">{price}</span>
        <MdDeleteForever
          className="w-[25px] h-[25px] text-red-500 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
}

export default Card2;
