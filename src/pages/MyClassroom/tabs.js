import React, { useState, useEffect,NavLink } from "react";
import Assignments from "./Assignments";
import Courseinfo from "./Courseinfo";
import Discuss from "./Discuss";
import Feedback from "./Feedback";
import Projects from "./Projects";
import Resources from "./Resourses";
import instance from "../../services/index";
import { useParams } from "react-router-dom";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    getCourse();
  },[]);
  const [courses, setCourses] = useState([]);
    const {id}=useParams()
  const getCourse = async () => {
    try {
      const res = await instance.get(
        `/student/getCourseProgress/${id}`
      );
      console.log(res.data);
      setCourses(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <>
      {courses.length && (
        <div>
          {courses.map((c,index)=>{
            return(
              <div>                 
                      <div className=" mb-4 mt-4 "> 
                       <div className=" border-b-2 border-gray-300 w-full ">
          <ul
            className="flex mb-0 list-none"
          >
            <li className={` text-center border-b-4 opacity-50 border-transparent ${openTab === 1 && 'border-yellow-500 opacity-100 '} hover:border-yellow-500`}>
              <a
               className={
                  "text-xl font-medium px-5 py-3 rounded block leading-normal  hover:border-yellow-400  " +
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
                Course Info
              </a>
            </li>
            <li className={` text-center  border-b-4 opacity-50 border-transparent ${openTab === 2 && 'border-yellow-500 opacity-100 '}  hover:border-yellow-500`} key={index}>
              <a
                className={
                  "text-xl font-medium px-5 py-3  rounded block leading-normal hover:border-yellow-400  " +
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
                Resources
              </a>
            </li>
            <li className={` text-center  border-b-4 opacity-50 border-transparent ${openTab === 3 && 'border-yellow-500 opacity-100 '}  hover:border-yellow-500`}>
              <a
                className={
                  "text-xl font-medium px-5 py-3  rounded block leading-normal hover:border-yellow-400  " +
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
                Assignments
              </a>
            </li>
            <li className={` text-center  border-b-4 opacity-50 border-transparent ${openTab === 4 && 'border-yellow-500 opacity-100 '}  hover:border-yellow-500`}>
              <a
                className={
                  "text-xl font-medium px-5 py-3 rounded block leading-normal hover:border-yellow-400  " +
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
                Projects
              </a>
            </li>
            
            {/* <li className={` text-center  border-b-4 opacity-50 border-transparent ${openTab === 5 && 'border-yellow-500 opacity-100 '}  hover:border-yellow-500`}>
              <a
                className={
                  "text-xl font-medium px-5 py-3 rounded block leading-normal  hover:border-yellow-400 " +
                  (openTab === 5
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Feedback
              </a>
            </li> */}
          </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white   mb-6 shadow-lg rounded">
            <div className="ml-14 py-12 ">
              <div className="tab-content tab-spac">
                <div className={openTab === 1 ? "block" : "hidden "} id="link1">
                  <Courseinfo data={courses}/>                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Resources data={courses}/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Assignments/>                  
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <Projects data={courses}/>              
                </div>
              
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                {/* <Feedback/> */}
                </div>
              </div>
            </div>
          </div>
        </div>               
        </div>
            )
            })}
        </div>
      )}
      </>
    </div>
  );
};
export default Tabs;