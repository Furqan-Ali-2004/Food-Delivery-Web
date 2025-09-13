import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { dataContext } from "../context/UserContext.jsx";
import { food_items } from "../food.js";

function Nav() {
  let { input, setInput, cate, setCate } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter((item) => {
      return item.food_name.toLowerCase().includes(input.toLowerCase());
    });
    setCate(newList);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8">
      <div className="w-[60px] h-[60px] bg-zinc-800  flex items-center justify-center rounded-full shadow-orange-500/15 shadow-lg hover:shadow-orange-500/40 duration-200 cursor-pointer">
        <MdFastfood className="w-[28px] h-[28px] text-orange-500" />
      </div>
      <form
        className="w-[45%] h-[60px] bg-zinc-800 rounded-full flex items-center px-5 gap-5 shadow-orange-500/15 shadow-lg focus-within:shadow-orange-500/30 duration-150 md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="h-[20px] w-[20px] text-orange-500" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] h-[100%] bg-transparent outline-none text-white placeholder:text-zinc-500 text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="w-[60px] h-[60px] bg-zinc-800  flex items-center justify-center rounded-full shadow-orange-500/15 shadow-lg hover:shadow-orange-500/40 duration-150 cursor-pointer relative">
        <span className="absolute top-0 right-2 text-orange-500 font-bold">
          0
        </span>
        <FaCartShopping className="w-[28px] h-[28px] text-orange-500" />
      </div>
    </div>
  );
}

export default Nav;
