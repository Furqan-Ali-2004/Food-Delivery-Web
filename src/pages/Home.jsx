import React, { useContext } from "react";
import Nav from "../components/Nav.jsx";
import Categories from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "../food.js";
import { dataContext } from "../context/UserContext.jsx";

function Home() {
  let { cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => {
        return item.food_category.toLowerCase() === category.toLowerCase();
      });
      setCate(newList);
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%] h-[100%] mt-6">
          {Categories.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[130px] h-[130px] flex flex-col justify-center items-center bg-zinc-800 rounded-full color text-zinc-300 font-semibold gap-2 p-5 shadow-orange-500/15 shadow-lg hover:shadow-orange-500/40 hover:scale-105 duration-150 cursor-pointer"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-7 pt-14 pb-10">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      <div className="w-[40vw] h-[650px] fixed top-10 right-5 bg-white rounded-3xl">
        <header></header>
      </div>
    </div>
  );
}

export default Home;
