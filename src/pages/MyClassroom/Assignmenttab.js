import React, { useState } from "react";
import { RiDownload2Fill } from "react-icons/ri";
const Assignmenttab = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <div>
        <div className=" mb-4 mt-4 ">
          <div className="border-b-2 border-gray-300 w-1/2">
            <ul className="flex mb-0 list-none  pb-1">
              <li className=" mr-2  text-center  hover:border-yellow-400 hover:border-b-2 hover:border-solid">
                <a
                  className={
                    "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal  " +
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
                  Instructions
                </a>
              </li>
              <li className=" mr-2  text-center">
                <a
                  className={
                    "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal hover:border-yellow-400  " +
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
                  View Solution
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded">
            <div className="pt-3">
              <div className="tab-content tab-spac flex flex-wrap w-96">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <div> <p className="ml-2 w-96">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut
                  </p>
                  </div>
                  <div className="px-44 -mt-28 ml-96 w-4/5">
                    <div className="pb-5">
                      <h4 >How to submit</h4>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt.<br></br>
                    </div>
                    <button className="bg-yellow-400 text-white w-48 font-bold py-1.5 px-4">
                      Submit assignments
                    </button>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link5">
                  <div className="font-fontFamil">
                    <h4 className="font-semibold">Answer</h4><br></br>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                    <p className="w-6/12 pt-5 flex"> <span className="flex flex-row pt-1 px-1"> <RiDownload2Fill color="black" /></span> Download Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assignmenttab;