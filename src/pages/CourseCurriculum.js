import { RiArrowUpSLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CourseCurriculum = (props) => {
  
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  
  return (
    <div>
      <>
        {props.data && (
          <div>
            {props.data.curriculum.map((c, index) => {
              return (
                <div>
                   <div className="cursor-pointer mx-auto  px-8 mt-2 text-xl text-black  font-popp bg-gray-100 w-2/4 " onClick={() => toggle(index)} key={index}>
                      <h1 className="py-6  pr-4 font-medium  text-base">{index + 1}  <span className="ml-6">{c.title}</span> 
                                    <span className="float-right">{clicked === index ? <RiArrowUpSLine size="2em" color="black" /> : <MdKeyboardArrowDown size="2em" color="black" />}</span>
                    </h1>
                    </div>



                  {clicked === index ? (
                    <div
                      className=" container   mx-auto  text-nomal text-gray-600   bg-gray-100  w-2/4 -py-16 overflow-hidden md:w-2/4 sm:w-full sm:overflow-hidden "
                    >
                      {c.topics.map((st) => {
                        return <h1 className="p-3.5">{st.title}</h1>;
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};
export default CourseCurriculum;