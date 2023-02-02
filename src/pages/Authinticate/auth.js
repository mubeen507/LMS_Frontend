import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import img from '../../images/dl-logo.png'
const Auth = () => {
  const [type, setType] = useState("signin");
  return (
    <div>
      <span className="flex md:flex-col justify-center items-center p-8">
        <img className="" src={img} style={{width: '220px'}} />
      </span>
      <span className="  flex justify-center items-center ">
        <div className="  md:box-border  shadow md:shadow-lg overflow-ellipsis overflow-hidden  rounded  md:border md:w-2/5 sm:w-2/5 h-full">
          <div className=" text-gray-700">
            {/* <button
              onClick={() => setType("signup")}
              className={`py-8   md:w-full  outline-none   text-2xl font-semibold   ${
                type === "signin" ? "bg-gray-100 border border-gray-300  font-semibold text-gray-400" : ""
              }`}
            >
              SIGN UP
            </button> */}
            <h1
              onClick={() => setType("signin")}
              className={` flex justify-center py-8  md:w-full  text-2xl font-semibold outline-none  font-semibold   ${
                type === "signup" ? "bg-gray-100 border border-gray-300 font-semibold text-gray-400" : ""
              }`}
            >
              SIGN IN
            </h1>
          </div>
          {/* {
              type === 'signin' ? <Login />:<Register />
          } */}

              {
                 type === 'signin' && <Login />
              }

        </div>
      </span>
    </div>
  );
};
export default Auth;