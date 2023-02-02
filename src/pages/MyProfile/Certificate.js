import React from 'react';
import { VscBell } from "react-icons/vsc";
import { IoMdContact } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import image from '../../images/awscourse.jpg';
import imag from '../../images/python.jpg';
function Certificate() {
    return (
        <div>

            <h1 className="text-xl font-bold flex justify-center py-10">No Certificates found</h1>
            {/* <div className=" h-1/5">
                <div className="h-5/6">
                    <div className=" flex flex-col w-full mr-12 mt-16 justify-center ml-12 mr-24 mb-32 bg-gray-100">
                        <div className="flex ">
                            <div>
                                <img src={image} className="ml-10 mb-10 mt-12 " width="200px"></img>
                            </div>
                            <div className=" flex flex-col w-3/4">
                            <div >
                                <h1 className="mt-14 items justify-left text-2xl ml-8  ">AWS</h1>
                            </div>
                            <div>
                                <input type="range" className=" ml-2 mt-6 w-10/12  "></input>
                            </div>
                            <div>
                            <div className="ml-96 mt-8 text-gray-700 text-2xl font-semibold"><a href="#">100% Course Completed</a></div>
                            </div>
                            <div className="flex text-xl">    
                            <div className="ml-56 mt-4 text-red-500 font-semibold underline "><a href="#">DOWNLOAD CERTIFICATE</a></div>
                            <div className="ml-20 mt-4 text-gray-500 font-semibold underline"><a href="#">VERIFY CERTIFICATE</a></div>
                            </div>
                    <div className="mt-16 border-b-2 -mx-16 w-11/12  border-gray-900 ">
                         </div>
                        </div>
                        </div>
                        <div className="flex ">
                            <div>
                                <img src={imag} className="ml-10  mt-12" width="200px"></img>
                            </div>
                            <div className=" flex flex-col w-3/4">
                            <div >
                                <h1 className="mt-14 items justify-left text-2xl ml-8">PYTHON</h1>
                            </div>
                            <div>
                                <input type="range" className="ml-2 mt-6 w-10/12" ></input>
                            </div>
                            <div className="flex px-16 text-xl">
                            <div className="ml-96 mt-4 font-semibold">40% Course Completed</div>
                            </div>
                            <div className="flex text-xl px-4 text-gray-400">
                            <div className="ml-96 mt-4 mb-4 ">You can Download Certificate after
                              complete course completion</div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div> */}
        </div>
    );
}
export default Certificate;