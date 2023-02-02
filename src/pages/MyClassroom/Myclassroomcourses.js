import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import awscourse from "../../images/awscourse.jpg"
import python from "../../images/python.jpg";
import powerbi from "../../images/powerbi.jpg"
import gamedevelopment from "../../images/gamedevelopment.jpg"
import { BrowserRouter, NavLink, useRouteMatch } from "react-router-dom";
import instance from "../../services/index"
const MyClassroomCourses = () => {
  const [courses, setCourse] = useState("")
  useEffect(() => {
    getOrderForStudent();
  }, []);
  const getOrderForStudent = async () => {
    try {
      const res = await instance.get("/student/getOrdersForStudent")
      console.log("get order for student ", res.data)
      setCourse(res.data)
    }
    catch (error) {
      console.log("get order for student", error.response.data)
    }
  }
  return (
    <div>
      {courses &&
  
        courses.map((course, i) => (
          <div className="bg-gray-100">
            <div className=" py-2 px-4 mx-36  " >
              <>

                <div className="flex bg-white h-60 w-auto my-5 shadow-lg">
                  <div className="w-1/2">

                    <img className="h-60" src={course.imageURL} />
                  </div>

                  <div className="w-3/4 pl-6">
                    <h1 className="font-semibold text-3xl py-4 mt-4">{course.title}</h1>
                    <h2 className="mr-4 text-thin ">{course.description}</h2>

                  </div>


                  {course.status !== "not_assigned" ?
                    <div className="w-1/4 flex items-center">
                      <NavLink to={`/course_activity/${course.progressId}`} className=" py-2 px-8 flex flex-row items-center bg-yellow-300  text-white hover:bg-yellow-400  cursor-pointer ">Countinue
                        <span className="ml-2  transition duration-100 ease-linear   transform hover:translate-x-2 "><BsArrowRight size="2rem" /></span>
                      </NavLink>
                    </div> :
                    <div className="w-1/4 flex items-center">
                      <NavLink to="#" className=" py-2 px-4 flex flex-row items-center  bg-yellow-300  text-white hover:bg-yellow-400  cursor-pointer ">Comming Soon
                        <span className="ml-2 transition duration-100 ease-linear   transform hover:translate-x-2 "><BsArrowRight size="2rem" /></span>
                      </NavLink>
                    </div>
                  }


                </div>

              </>

            </div>
          </div>
        ))
      }
    </div>
  );
};
export default MyClassroomCourses;