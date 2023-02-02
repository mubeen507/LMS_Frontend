import { useState, useEffect } from 'react'
import instance from '../services/index'
import { RiArrowUpSLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useParams } from 'react-router-dom'
const Faqs = (props) => {
 
  const [clicked, setClicked] = useState(false)
  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  }

  return (
    <div>
     
      <>
        {
          props.data && (
            <div>
              {props.data.faqs.map((c, index) => {
                return (
                  <div>
                    < div className="cursor-pointer  px-8 mt-2 text-xl text-black  font-popp bg-gray-100 w-2/4 " onClick={() => toggle(index)} key={index}>
                      <h1 className="py-6  pr-4 font-medium  text-base">{c.question}
                                    <span className="float-right">{clicked === index ? <RiArrowUpSLine size="1em" color="black" /> : <MdKeyboardArrowDown size="1em" color="black" />}</span>
                    </h1>
                    </div>
                    {clicked === index ? (<div className=" p-5   font-normal text-normal text-gray-600  bg-gray-100  w-2/4 h-auto overflow-hidden ">
                   
                      <h1 className="ml-3">{c.answer}</h1>
                    </div>) : null}
                  </div>
                )
              })}
            </div>
          )
        }
      </>
    </div>
  )
}
export default Faqs