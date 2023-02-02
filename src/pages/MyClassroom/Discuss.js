import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoReply } from 'react-icons/go'
const Discuss = () => {
  return (
    <div className="md:ml-24 mt-8">
      <div className="flex flex-wrap">
        <div>
          <FaUserCircle className="flex flex-wrap" size="4em" color="gray" />
        </div>
        <input
          type="text"
          className="border-b-2 border-gray-400 flex flex-wrap  font-sans font font-serif  py-2 ml-8  focus:outline-none md:w-1/2 hover:boreder-gray-900"
          placeholder="Start Discussion"
        />
      </div>
      <div className="flex flex-wrap mt-8 ">
        <div>
          <FaUserCircle size="4em" color="gray" />
        </div>
        <p className="ml-8 font-sans font font-serif text-xl">How To Upload file in AWS</p>
      </div>
      <div className="ml-24 w-1/2 mt-4 font-sans font font-serif ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</div>
      <div className="border-b-2 w-11/12 border-gray-400 mt-16"></div>
      <div className=" mt-8 ml-8">
      <div className="flex flex-wrap ">
        <div>
          <FaUserCircle size="4em" color="gray" />
        </div>
        <input
          type="text"
          className="border-b-2 border-gray-400 t font-sans font font-serif  py-2 ml-8 focus:outline-none md:w-1/2 hover:boreder-gray-900"
          placeholder="write a Reply"
        />
      </div>
     <div className="mt-12">
     <a href="#" className="cursor-pointer border-b-2 border-gray-400 text-center w-20  font-sans font-serif">30 Replys</a>
     </div>
      </div>
      <div className="flex flex-wrap mt-16 ml-8">
        <div>
          <FaUserCircle size="4em" color="gray" />
        </div>
        <p className="ml-8  font-sans font font-serif ">Ankith</p>
      </div>
      <div className="ml-32  mt-4 w-1/2  font-sans font font-serif ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</div>
<div className="flex flex-wrap mt-8  font-sans font font-serif ">
      <div className="ml-32  cursor-pointer  font-sans font font-serif "> <GoReply color="gray" size="2em" /></div>
      <div className="ml-8">Reply</div>
      </div>
      <div className="flex flex-wrap mt-16 ml-8">
        <div>
          <FaUserCircle size="4em" color="gray" />
        </div>
        <p className="ml-8  font-sans font font-serif ">Suresh</p>
      </div>
      <div className="ml-32 w-1/2 mt-4  font-sans font font-serif ">Loremipsumdolorsitamet,consetetursadipscingelitr,
      seddiamnonumyeirmodtemporinviduntutlaboreetdoloremagnaaliquyamerat,seddiamvoluptua.Atveroeoset</div>
      <div className="flex flex-wrap mt-8  font-sans font font-serif ">
      <div className="ml-32  cursor-pointer  "> <GoReply color="gray" size="2em" /></div>
      <div className="ml-8">Reply</div>
      </div>
      <div className="ml-32 border-b-2 w-24 text-center border-gray-400 mt-8  font-sans font font-serif ">ViewAll</div>
      <div className="border-b-2 w-11/12 border-gray-400 mt-16"></div>
      <div className="flex flex-wrap mt-8 ">
        <div>
          <FaUserCircle size="4em" color="gray" />
        </div>
        <p className="ml-8  font-sans font font-serif ">How To Upload file in AWS</p>
      </div>
      <div className="flex flex-wrap">
      <div className="ml-24 w-1/2  mt-4 font-sans font font-serif">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
</div>
<button className="float-right ml-56 w-auto  h-24 rounded-br rounded-full flex flex-wrap bg-yellow-400 text-white  flex justify-center items-center text-center px-4">Have a doubt? Rise a query</button>
      </div>
       </div>
  );
};
export default Discuss;
