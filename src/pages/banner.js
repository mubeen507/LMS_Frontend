import React from 'react'
import img from "../images/welcome.jpg"
import {useSelector} from "react-redux"
function Welcome() {
   const name =useSelector(state => state.me)
   console.log("login info",name)
    return (
        <div className="mt-2">  
    <img className="pt-22 w-full " src={img} alt=""/>
    <figcaption className="absolute text-4xl -mt-52 text-white  hidden md:block font-medium font-fontfamily">
      <div className="px-24">
        <h1>Welcome  {name.firstname} {name.lastname}  <br></br> to  Digital Lync Academy</h1>
      </div>
      </figcaption>
  </div>
    )
}
export default Welcome;