import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { MdCloudDownload } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { BrowserRouter, NavLink, useHistory } from "react-router-dom"
import Banner from "./banner"
import instance from "../services";
import { useDispatch } from "react-redux"
import { order } from "../Store/actions/userActions"

const Dashboard = () => {
  
  const [courses, setCourses] = useState("")
  useEffect(() => {
    getCourses();

  }, []);

  const getCourses = async () => {
    try {
      const res = await instance.get('/course/getAllCourses')
      console.log(res)
      setCourses(res.data)
    }
    catch (error) {
      console.log(error.message)
    }
  }

  let orderId = (courseid) => {
    dispatch(order(courseid))
    

      history.push("/order")
    

  }
  const history = useHistory()
  const dispatch = useDispatch()


  console.log("getAllCourses  ", courses)

  return (
    <React.Fragment>
      <Banner />
      <div className="bg-gray-100">
        <div>
          <IconContext.Provider value={{ color: "gray" }}>
            <h1 className="pt-24 font-bold text-3xl  flex justify-center items-center">
              BROWSE PROGRAMS
            </h1>
            <div className="p-10 container mx-auto box-border lg:w-full grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3   gap-10   ">
              {courses &&
                courses.length &&
                courses.map((course, i) => (

                  <>
                    <div className="overflow-hidden shadow-xl " key={i}>
                      <NavLink to={`/course/${course._id}`} className="no-underline" >
                        <img className="w-full h-56 " src={`/${course.imageURL}`} alt="" />
                        <div className="px-6 py-4 h-72 bg-white">
                          <div className="font-bold text-xl mb-2 p-4 flex justify-center items-center font-fontfamily">
                            {course.title}
                          </div>
                          <p className="text-gray-700 font-fontfamily">
                            {course.mainDescription}
                          </p>
                        </div>
                      </NavLink>

                      <div className="flex px-6 bg-white">
                        <a
                          href="#"
                          className="px-3 py-1 mb-2 font-fontfamily flex items-center justify-center flex-col w-1/2"
                        >
                          <MdCloudDownload size="2em" />
                          Curriculum
                        </a>

                        <span className=" border-l mb-6 mt-2 border-gray-200 h-18 "></span>

                        <button onClick={() => { orderId(course) }}
                          className="px-3 py-1 mb-2 font-fontfamily flex items-center justify-center flex-col w-1/2"
                        >
                          <FiCheckCircle size="2em" />
                          Enroll Now
                        </button>

                      </div>
                    </div>
                  </>


                ))}
            </div>

          </IconContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;

