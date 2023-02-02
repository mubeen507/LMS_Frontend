import React, { useState, useEffect } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi"
import { HiOutlineChevronUp } from "react-icons/hi"
import { GoPlay } from "react-icons/go"
import Tabs from "./tabs"
import { useParams, useRouteMatch } from "react-router-dom"
import instance from '../../services'
import Vimeo from '@u-wave/react-vimeo';
function CourseActivity() {

    const [clicked, setClicked] = useState(false)

    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)

    }

    const { id } = useParams()
    console.log("course activity id : ", id);

   
    const [videoid,setVideoid] = useState(470201743)
    const [state, setState] = useState([])

    useEffect(() => {
        courseactivity()
    }, [])



    const courseactivity = async () => {
        try {
            const res = await instance.get(`/student/getCourseProgress/${id}`)    // 60d2ef5b7a3509001ab6c521  `student/getCourseProgress/60d2ef5b7a3509001ab6c521`
            console.log("course activity ", res.data)
            setState(res.data)
        }
        catch (error) {
            console.log(error.response)
        }
    }

    console.log("state", state)
    console.log("video id", videoid)

    return (
        <>
            <div className="flex flex-row mt-2">
                <div className="overflow-auto h-96 overflow-x-scroll w-1/3">
                    <div className="text-xl  bg-gray-300 py-4 px-5  ">
                        <h1>Recorded Classes</h1>
                    </div>
                    <div className="bg-white">
                        {
                            state.map((item, index) => {
                                return (
                                    item.curriculum.map((circulum, index) => {
                                        return (
                                            <div className=" border-b border-gray-200 " >
                                                <h2 className="py-2.5 px-5" onClick={(e) => e.stopPropagation} onClick={() => toggle(index)}>
                                                    {circulum.title}
                                                    <span className="float-right pt-1 ">{clicked === index ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />} </span>
                                                </h2>
                                                {clicked === index ?
                                                    <div>
                                                        {circulum.topics.map((it, ind) => {
                                                            return (
                                                                <div className="bg-gray-200 border-b border-gray-300 hover:bg-yellow-200 " key={ind} onClick={() => { setVideoid(it.video_id) }}>
                                                                    <h3 className="py-2.5 px-5"    >{it.title}
                                                                        <span className="float-right pt-1" > <GoPlay /> </span>

                                                                    </h3>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        )
                                    })
                                )
                            })
                        }

                    </div>
                </div>
                <div className="w-max-full px-2 flex items-center">
                    {/* <Vimeo
                        video={videoid}
                        width="900"
                        height="500"
                        autoplay
                    /> */}


                         <h1 className="  text-xl font-bold ml-24 ">Videos will be displayed here</h1>



                </div>
            </div>
            <div className="pt-16">
                <Tabs />
            </div>
        </>
    )
}

export default CourseActivity


