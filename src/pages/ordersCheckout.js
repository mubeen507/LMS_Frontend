import React from "react";

import img2 from "../images/tickmark.png";
import img from "../images/logo.png"
import { BsArrowRight } from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const OrderCheckout = () => {

  const order = useSelector(state => state.order)
  console.log("order id", order)

  return (
    <>
      <div className="mt-2 ">
        <div className="    ">
          {/* <div className="h-16 flex justify-center mt-8 ">
            <img src={img} className="h-14"></img>
          </div> */}
          <div className="bg-gray-100 p-20 h-auto">
            <div className="h-16 flex justify-center ">
              <img src={img2} className="h-16 mt-8"></img>
            </div>
            <h1 className="text-xl font-bold text-gray-600 mt-8 pt-2 text-center">
              Welcome   to   the   world  of  {order.title}
            </h1>
            <div className="h-64 bg-white mt-8 grid grid-cols-3 mx-20">
              <img src={order.imageURL} className="h-64 p-10"></img>
              <h1 className="text-xl text-center font-bold text-gray-600 pt-24">
                {order.title}
              </h1>
              <div className=" flex justify-center h-10  pt-24 ">
                <button className="   flex flex-row items-center  bg-yellow-500 text-white p-6   cursor-not-allowed">Start course
                  <span className="ml-2 transition duration-100 ease-linear   transform hover:translate-x-1 "><BsArrowRight size="2rem" /></span>
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="py-2 px-8 bg-white text-yellow-500 border border-yellow-500 ">
                <NavLink to="/Myclassroomcourses">
                  My class room
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderCheckout;