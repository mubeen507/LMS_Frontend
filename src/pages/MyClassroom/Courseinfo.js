import { useState, useEffect } from 'react'
import instance from "../../services/index";
import { useParams } from 'react-router-dom'
const CourseInfo = (props) => {
    
    return (
        <>
            {
                props.data.map((e) => {
                    return (
                        <div className="leading-loose">
                            <h1 className="font-bold text-2xl text-black py-2 font-bold">About This Course</h1>
                            <h1 className=" text-thin font-medium">Course Name:{e.title}</h1>
                            <h1 className=" text-thin font-medium">Start Course:{e.startedDate}</h1>
                        </div>
                    )
                })
            }
            <div className="leading-loose">
                <h1 className=" text-thin font-medium w-2/12">Duration: 20hr</h1>
                <h1 className=" text-thin font-medium w-2/12"> Modules: 10</h1>
                <h1 className=" text-thin font-medium w-2/12">Prerequisities: No</h1>
                <h1 className="text-thin font-medium">Skill Level: Beginner</h1>
            </div>
        </>
    )
}
export default CourseInfo