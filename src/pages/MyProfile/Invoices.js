import React, { useState, useEffect } from 'react';

import instance from "../../services/index"
const Invoices = () => {
    const [invoice, setInvoice] = useState('')
    useEffect(() => {
        getInvoice();
    }, [])
    const getInvoice = async () => {
        try {
            const res = await instance.get("/student/getInvoices")
            console.log("get invoice res", res.data)
            setInvoice(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
        {
            invoice &&<h1 className="flex justify-center text-xl font-bold mt-10"> No Invoice</h1> &&invoice.map((item) =>{
                return(
        <div className="bg-gray-100 w-full h-full mt-20">
            <h1 className="pt-8 pl-16">
            <div className="flex flex-row justify-between h-16 flex justify-center items-center bg-gray-200 w-11/12 ">
                       <div className="pl-16">Course</div>
                        <div className="pr-16">Amount Paid</div>
            </div>
            </h1>
                        <div>
                    <div className=" h-64 grid grid-cols-3 gap-4 ">
                       <img src={`${item.imageURL}`} className=" pt-20 pl-20 pb-6"/>
                       <h1 className="ml-8 font-semibold flex items-center">{item.title}</h1>
                       <h1 className="mt-16 mr-8 "><span className="font-semibold">Date:</span>{item.orderedDate}
                       <h1 className="py-4 "><span className="font-semibold">Total Amount Paid:</span>{item.totalPrice}</h1>
                       <a className="border-b-2 w-32 text-yellow-500 border-yellow-500 "href="#" download>DownloadInvoice</a>
                       </h1>
                    </div>
                    <div className="border-b-2 w-full border-gray-900"></div>
                    </div>
        </div>
                )
            })
        }
        
        </>
    );
}
export default Invoices;