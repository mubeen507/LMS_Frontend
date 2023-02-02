import React, { useState } from "react";
import Editprofile from "./Editprofile"
import Changepassword from "./Changepassword"
import Invoices from "./Invoices"
import Certificate from "./Certificate"
const Profile = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  
  
  return (
    <div>
      <div>
        <div className=" mb-4 mt-4 ">
        <div className="border-gray-300 w-full ">
          <ul
            className="flex mb-0 bg-gray-200 list-none  pb-1"
          >
            <li className={`ml-32  text-center  border-b-4 border-transparent ${openTab === 1 && 'border-yellow-500'}  hover:border-yellow-500`}>
              <a
                className={
                  "text-lg  font-medium px-5 bg-gray-200 py-3  rounded block leading-normal hover:border-yellow-400  " +
                  (openTab === 1
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Edit Profile
              </a>
            </li>
            <li className={`ml-32  text-center  border-b-4 border-transparent ${openTab === 2 && 'border-yellow-500'}  hover:border-yellow-500`}>
              <a
                className={
                  "text-lg font-medium px-5 bg-gray-200 py-3  rounded block leading-normal hover:border-yellow-400  " +
                  (openTab === 2
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Change Password
              </a>
            </li>
            <li className={`ml-32  text-center  border-b-4 border-transparent ${openTab === 3 && 'border-yellow-500'}  hover:border-yellow-500`}>
              <a
                className={
                  "text-lg font-medium px-5 bg-gray-200 py-3  rounded block leading-normal hover:border-yellow-400  " +
                  (openTab === 3
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Invoices
              </a>
            </li>
            <li className={`ml-32  text-center  border-b-4 border-transparent ${openTab === 4 && 'border-yellow-500'}  hover:border-yellow-500`}>
              <a
                className={
                  "text-lg font-medium px-5 bg-gray-200 py-3 rounded block leading-normal hover:border-yellow-400  " +
                  (openTab === 4
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
              Certificates
              </a>
            </li>
          </ul>
          </div>
          <div className="  w-8/12  ml-56  ">
            <div className="ml-4 text-xl ">
              <div className="tab-content tab-spac ">
                <div className={openTab === 1 ? "block" : "hidden "} id="link1">
                 <Editprofile />                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <Changepassword />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Invoices />                
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <Certificate />            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;