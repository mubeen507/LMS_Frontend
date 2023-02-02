import { useState, useEffect, NavLink } from 'react'
import instance from "../../services/index";
import { useParams } from 'react-router-dom'
import { RiDownload2Fill } from 'react-icons/ri'
const Resources = (props) => {
 
    return (
        <>
            {
                props.data.map((r) => {
                    return (
                        <h1>{r.curriculum.map((c) => {
                            return (
                                <h1>{c.topics.map((t) => {
                                    return (
                                        <h1>{t.resources.map((re) => {
                                            return (
                                                <div className="w-2/4 divide-y-4 divide-solid">
                                                    <div className=" flex items-row justify-between  ">
                                                        <h1 >{re.fileTitle}</h1>
                                                        <a href="#" className="  text-thin" download="C:\Users\dell\Desktop\eswar work report">Download <span className="p-1 float-right"><RiDownload2Fill /></span></a>
                                                    </div>
                                                    <div className="flex items-row justify-between  ">
                                                        <h1>{re.referenceTitle}</h1>
                                                        <a href='#' className="ml-64 text-thin w-2/4" >{re.referenceLink}</a>
                                                    </div>

                                                </div>
                                            )
                                        })}</h1>
                                    )
                                })}</h1>
                            )
                        })}</h1>
                    )
                })
            }
        </>
    )
}
export default Resources