import React, { useContext } from "react";
import Nav from "../components/Nav.jsx";
import Categories from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "../food.js";
import { dataContext } from "../context/UserContext.jsx";
import EmptyCart from "../assets/empty-cart.png";
import NotFound from "../assets/not-found.png";

import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

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

  let items = useSelector((state) => state.cart);

  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(subTotal);

  let deliveryCharge = 20;
  let tax = (subTotal * 0.5) / 100;
  let totalAmount = Math.floor(subTotal + deliveryCharge + tax);

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
        {cate.length > 1 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="w-[350px] h-[350px] flex flex-col justify-center items-center mt-8 space-y-4">
            <img src={NotFound} alt="" className=" object-cover" />
            <p className="text-orange-500 text-lg font-semibold">
              No dish found — try something tasty!
            </p>
          </div>
        )}
      </div>

      <div
        className={`w-[90vw] md:w-[40vw] h-[650px] fixed top-12 right-5 p-5 rounded-3xl z-10 bg-zinc/10 backdrop-blur-2xl shadow-[0px_0px_15px_rgba(249,115,22,0.3)] ${
          showCart ? "translate-x-0" : "translate-x-[150%]"
        } transition-all duration-500`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-orange-500 text-[20px] font-semibold">
            Order Items
          </span>
          <ImCross
            className="text-orange-500 w-[20px] h-[20px] cursor-pointer hover:text-orange-900"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-3 flex flex-col h-[300px] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-zinc-800">
              {items.map((item) => {
                return (
                  <Card2
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    qty={item.qty}
                  />
                );
              })}
            </div>

            <div className="w-full border-t-[3px] border-b-[3px] border-orange-500 mt-3 flex flex-col gap-2 py-4 px-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-white text-lg font-semibold">
                  Subtotal
                </span>
                <span className="text-orange-500 text-lg font-semibold">
                  Rs {subTotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-white text-lg font-semibold">
                  Delivery Fee
                </span>
                <span className="text-orange-500 text-lg font-semibold">
                  Rs {deliveryCharge}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-white text-lg font-semibold">Tax</span>
                <span className="text-orange-500 text-lg font-semibold">
                  Rs {tax}/-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-2 px-8">
              <span className="text-white text-xl font-bold">Total Amount</span>
              <span className="text-orange-500 text-xl font-bold">
                Rs {totalAmount}/-
              </span>
            </div>

            <button
              className="relative w-full mt-4 p-3 font-semibold border-2 border-orange-500 overflow-hidden group rounded-full cursor-pointer ounline-none"
              onClick={() => {
                toast.success("Order Placed..");
              }}
            >
              <span className="absolute inset-0 bg-orange-500 translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400 outline-none"></span>
              <span className="relative z-10 text-orange-500 group-hover:text-white text-lg font-bold transition-colors duration-400">
                Place Order
              </span>
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center mt-8 space-y-4">
            <img
              src={EmptyCart}
              alt=""
              className="h-450px] w-[450px] fill-orange-500 object-cover"
            />
            <p className="text-orange-500 text-xl font-semibold transition-opacity duration-700">
              Looks like you haven't added anything yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
