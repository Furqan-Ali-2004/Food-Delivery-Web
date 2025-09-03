import { useState } from "react";
import Nav from "../components/Nav.jsx";
import Categories from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "../food.js";

function Home() {
  function Home() {
    let [cate, setCate] = useState(food_items);
  }

  function fiter(category) {
    if (category === "all") {
      setCate(food_items);
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Nav />

      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%] h-[100%] mt-6 ">
        {Categories.map((item) => {
          return (
            <div className="w-[130px] h-[130px] flex flex-col justify-center items-center  bg-zinc-800 rounded-full color text-zinc-300 font-semibold gap-2 p-5 shadow-orange-500/15 shadow-lg hover:shadow-orange-500/40 hover:scale-105 duration-150 cursor-pointer">
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-7 pt-14 pb-10">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
