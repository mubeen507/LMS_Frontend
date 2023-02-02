import React, { useState, useEffect } from 'react'
import instance from "../services/index"
import linuxlogo from "../images/linuxlogo.png"
import awslogo from "../images/awslogo.png"
import djangologo from "../images/djangologo.png"
import flasklogo from "../images/flasklogo.png"
import githublogo from "../images/githublogo.png"
import jupiterlogo from "../images/jupiterlogo.png"
import python from "../images/python.png"
import pythonlogo from "../images/pythonlogo.png"
import slacklogo from "../images/Slacklogo.png"
import trellologo from "../images/trellologo.png"
import certificate from "../images/dl-certificate.png"
import brocade from "../images/brocade.png"
import processweaver from "../images/processweaver.png"
import fory from "../images/foyr.png"
import ideeo from "../images/ideeo.png"
import salesforce from "../images/salesforce.png"
import att from "../images/att.png"
import intellibot from "../images/intellibot.png"
import bgimg from "../images/welcome.jpg"
import { BiCheckbox } from "react-icons/bi";
import Faqs from './Faqs'
import Coursecurriculm from './CourseCurriculum'
import { NavLink, useHistory, useParams } from "react-router-dom"
import { order } from '../Store/actions/userActions'
import { useDispatch } from "react-redux"
function Course() {
    const { id } = useParams();
    console.log("id", id)

    const [courses, setCourses] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        getCoursesById()

    }, []);

    const getCoursesById = async () => {
        try {
            const course_res = await instance.get(`/course/getCourseById/${id}`)
            //console.log(course_res.data)
            setCourses(course_res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const orderId = () => {
        dispatch(order(courses))
        history.push("/order")

    }



    console.log("my courses", courses)
    return (
        <React.Fragment>
            {courses != "" &&
                <div>
                    <div>
                        <div>


                            <div className="mt-2 text-white">
                                <img className="pt-22 w-full " src={bgimg} alt="" />
                                <figcaption className="absolute -mt-60 hidden md:block font-medium font-fontfamily">
                                <div className="px-4 mx-36 ">
                                    <h1 className="text-4xl font-semibold ">{courses.title}</h1>
                                    <p className="pt-4 text-justify text-center  w-2/4 font-fontfamily ">
                                        {courses.mainDescription}
                                    </p>
                                    <br></br>
                                    <div>
                                        <button onClick={orderId} className="border border-black px-6 py-2 hover:bg-yellow-300 hover:text-white">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                                </figcaption>
                            </div>



                            {/* <div className="bg-red-400 py-24">
                                                              <div className="px-4 mx-36">
                                    <h1 className="text-4xl font-semibold ">{courses.title}</h1>
                                    <p className="pt-4 text-justify text-center text-gray-600 w-2/4 font-fontfamily ">
                                        {courses.mainDescription}
                                    </p>
                                    <br></br>
                                    <div>
                                        <button onClick={orderId} className="border border-black px-6 py-2 hover:bg-black hover:text-white">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="py-16">
                        <div className="px-4 mx-36">
                            <div className="w-auto">
                                <h1 className=" mb-5 text-4xl font-semibold">Key Features</h1>
                                <div className=" pt-7 pb-14">
                                    <div className="w-3/4 flex justify-between  ">
                                        <div className="flex w-1/2">
                                            <BiCheckbox size="2em" />
                                            <span className="px-2">Real Time Practice Labs</span>
                                        </div>
                                        <div className="flex w-1/2">
                                            <BiCheckbox size="2em" />
                                            <span className="px-2">
                                                Live Projects With Our Industry Partners
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex justify-between  ">
                                        <div className="flex w-1/2">
                                            <BiCheckbox size="2em" />
                                            <span className="px-2">Physical And Virtual Online Classrooms</span>
                                        </div>
                                        <div className="flex w-1/2">
                                            <BiCheckbox size="2em" />
                                            <span className=" px-2">
                                                Internship After Course
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-3/4">
                                        <div className="flex">
                                            <BiCheckbox size="2em" />
                                            <span className="px-2">24/7 Support On Slack</span>
                                        </div>
                                    </div>
                                    <div className="w-3/4">
                                        <div className="flex">
                                            <BiCheckbox size="2em" />
                                            <span className="px-2">Job & Interview Assistance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold mb-10 text-center  ">Course Curriculum</h1>
                        <Coursecurriculm data={courses} />
                    </div>
                    <div className="mx-36">
                        <div className="pt-20">
                            <div >
                                <h1 className="text-4xl font-semibold mb-10  ">TOOLS COVERED</h1>
                            </div>
                            <div className="flex flex-row grid grid-cols-6">
                                <img className="h-12 mr-12 mb-2.5" src={linuxlogo} alt="linuxlogo" />
                                <img className="h-12 mr-12 mb-2.5" src={slacklogo} alt="slack" />
                                <img className="h-12 mr-12 mb-2.5" src={pythonlogo} alt="python" />
                                <img className="h-12 mr-12 mb-2.5" src={awslogo} alt="aws" />
                                <img className="h-12 mr-12 mb-2.5" src={trellologo} alt="trello" />
                                <img className="h-12 mr-12 mb-2.5" src={githublogo} alt="github" />
                                <img className="h-12 mr-12 mb-2.5" src={jupiterlogo} alt="jupiter" />
                            </div><br />
                            <div className="flex flex-row">
                                <img className="h-12 mr-12 mb-2.5" src={djangologo} alt="django" />
                                <img className="h-12 mr-12 mb-2.5" src={flasklogo} alt="flask" />
                                <img className="h-12 mr-12 mb-2.5" src={python} alt="python" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-20 px-0">
                            <div className=" w-1/2 ">
                                <h1 className="mt-2.5 mb-7 text-4xl font-bold ">Certification</h1>
                                <p className="mr-16 mb-7">Our training is based on latest cutting-edge infrastructure technology which makes you ready for the industry.Digital Lync academy will Present this certificate to students or employee trainees upon successful completion of the course which will encourage and add to trainee’s resume to explore a lot of opportunities beyond position </p>
                                <button onClick={orderId} className="rounded-full bg-yellow-500 px-4 py-3 px-8 hover:bg-black hover:text-white">
                                    Get Certified
                                </button>
                            </div>
                            <div className="px-3.5 bg-yellow-300 rounded-xl hover:bg-black ">
                                <div className="py-2">
                                    <img className="h-96 w-auto" src={certificate} alt="certificate" />
                                </div>
                            </div>
                        </div>
                        <div className="px-16 py-24">
                            <div className="mt-2.5 mb-12">
                                <h1 className="text-3xl mx-3.5 font-medium flex justify-center">OUR HIRING PARTNERS </h1>
                            </div>
                            <div className="flex flex-row grid grid-cols-6">
                                <img className="pr-14" src={att} alt="hiring partner" />
                                <img className="pr-14" src={brocade} alt="hiring partner" />
                                <img className="pr-14" src={processweaver} alt="hiring partner" />
                                <img className="pr-14" src={fory} alt="hiring partner" />
                                <img className="pr-14" src={ideeo} alt="hiring partner" />
                                <img className="pr-14" src={salesforce} alt="hiring partner" />
                                <img className="pr-14 grid grid-cols-3" src={intellibot} alt="hiring partner" />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mx-36">
                        <h1 className="mt-2.5 mb-7 text-3xl font-medium ">FAQ's</h1>
                        <Faqs data={courses} />
                    </div>
                    <div className="pt-4">
                        <div>
                            <img className="w-full " src={bgimg} />
                            <div className="flex md:justify-center " >
                                <div className="absolute  -mt-52 block font-medium text-center ">
                                    <div className="text-gray-700" >
                                        <h5 className="text-2xl font-bold  -mt-9  ">Kick start your career</h5>
                                        <p className="text-base font-normal leading-5 md:text-center pt-3">
                                            Up-skilling to emerging technologies has become the need of the
                                            hour, with <br></br> technological changes shaping the career landscape. We
                                            at Digital Lync academy offers <br></br>programs in all courses with industry
                                            experts to help you up-skill, stay relevant & <br></br> get noticed.
                                        </p>
                                        <div className="pt-7">
                                            <button onClick={orderId} className="border border-black bg-gray-600 text-lg text-white rounded px-7 py-2 ">
                                                Join Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>

    )
}

export default Course
