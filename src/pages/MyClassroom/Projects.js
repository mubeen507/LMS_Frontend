import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
function Project(props) {
  return (
    <div>
      {props.data &&
      props.data.map((p)=>{
        return(
          <div>
           {p.projects.map((pt, i)=>{
             return(
               <div>
                 <div className="container  mx-auto ">
          <h1 className="text-gray text-2xl font-sans fant-sans-serif font-semibold py-3">
            Project {i+1}: {pt.title}
          </h1>
          <p className="text-gray font-sans fant-sans-serif w-1/2 pt-1">
            {pt.description}
          </p>
          <div className="pt-5 flex flex-wrap font-sans">
            <a href="#">
            <RiDownload2Fill color="grey" size="2rem">{pt.projectLink}</RiDownload2Fill>
            <div className="-mt-7 ml-12 text-gray mb-9">
               Download Project Files              
            </div>            
            </a>
          </div>
          {
            i !== p.projects.length - 1 && (
              <div className="border-b-2 border-gray-400 w-5/6"></div>
            ) 
          }
           </div>                
               </div>
             )
           })}
          </div>
        )
      })
      }    
    </div>
  );
}
export default Project;