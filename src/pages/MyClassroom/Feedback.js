import React,{ useState,useEffect } from 'react'
import { ImStarFull } from 'react-icons/im'
import {  HiUserCircle } from 'react-icons/hi'
import instance from '../../services/index'
import "./feedback.css"

const StarRating = () => {
  const [rating,setRating] = useState(null);
  const [hover,setHover] = useState(null);
  const [message, setMessage] = useState( ' ' );
  // const [disable, setDisable] = useState(true);
  // buttonshow.addEventListener('onsubmit',()=>{
  //    if(buttonshow.)
  // })
  const [state, setState] = useState({ rating: null, user: "" }) 
  console.log(state)
        useEffect(() => {
          Rating()
      }, [])
      const Rating = async () => {
    try {
        const res = await instance.post('/student/addFeedback',{...state})
        console.log("Rating ", res.state)
        setState(res.state)
        console.log(res)
    }
    catch (error) {
        console.log(error.message)
    }
}
const Array = [1,2,3,4,5]
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
  //  handleSubmit=(event)=>{
  //    event.preventDefault();
  //  }
  return (
    <div>
      <h1>Rate:</h1>
      {Array.map((star, i) =>{
        const ratingValue = ++i
        return (
          <label>
            <input 
            type= "radio" 
            name= "rating" 
            value= {ratingValue} 
            onClick={e => setState({...state,rating:e.target.value})}
            />
            <ImStarFull 
            className="star"
            size={30}
            color={ratingValue <= (  rating ) ? "#FDDA0D" : " #C0C0C0"}
            onMouseEnter = {()=>setRating(ratingValue)}
            // onMouseLeave = {()=>setRating(null)}
            onChange={e => setState({...state,rating:e.target.value})}
            />
          </label>
        )
      }) }<br/>
      <p>The rating is {rating}</p>
      <HiUserCircle  size="60"/>
      <input
         name = "user"
         type="text"
         onChange={e => setMessage(e.target.value)}
         id="textfield"
         placeholder="Add a comment"
         onChange={e => setState({...state,user:e.target.value})}
       /><button id="myDIV" className=""onClick={setRating} >SUBMIT</button>
    </div>
  )
}
export default StarRating;