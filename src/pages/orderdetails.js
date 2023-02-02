import React, { useState, useEffect } from 'react'
import instance from "../services/index"
import { useSelector } from "react-redux"
import { NavLink, useHistory } from 'react-router-dom'
import { v4 } from 'uuid';


const OrderDetails = () => {
    const history = useHistory()
    const name = useSelector(state => state.me)
    console.log("login info", name)
    const order = useSelector(state => state.order)
    console.log("order id", order)

    //    if(order === ''){
           
    //     history.push("/dashboard")
    //    }
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    const razorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const options = {
            key: "rzp_test_VUfGujc6qEAj1x", // Enter the Key ID
            amount: order.price * 100,
            currency: "INR",
            name: "Digital-Lync",
            description: `Course name: ${order.title}`,
            image: {},
            notes: {
                "billing_name": "TestBilling"
            },

            handler: async function (response) {
                try {

                    const data = {
                        courseId: order._id,
                        paymentId: v4(),
                        totalPrice: order.price,
                    };

                    const result = await instance.post("/student/createOrder", data);

                    // alert(result.data);
                       history.push("/checkout")
                }
                catch (error) {
                    console.log(error.message)
                }
 },
            prefill: {
                name: name.firstname,
                email: name.email,
                contact: name.phone,
            },

        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


    return (
        <React.Fragment>
            <div >
                {

                    <div>
                        {/* <div className=" flex justify-center py-2.5">
                            <img className="px-3.5 object-contain" src={digitallynclogo} alt="logo" style={{width: '220px'}} />
                        </div> */}
                        <div className="mx-36 mt-10 ">
                            <div className="mx-32  shadow-xl ">
                                <div className="flex content-center  bg-gray-500 text-white border-2 border-black-500">
                                    <h3 className="p-5 text-xl font-medium float-left">ORDER DETAILS</h3>
                                </div>
                                <div className="pt-10 px-8">
                                    <div className="bg-gray-200 px-14 py-3.5 flex flex-row  justify-between ">
                                        <h2 className="px-3.5 justify-between">COURSE</h2>
                                        <h2 className="px-3.5 justify-between">PRICE </h2>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex flex-nowrap justify-between  " >
                                            <div className="w-40  h-40">
                                                <img src={order.imageURL} className="h-40  " alt="logo" />
                                            </div>

                                            <h1 className="text-xl font-bold pt-10"> {order.title}</h1>
                                            <h1 className=" text-xl text-base font-bold pt-10 mr-10">{order.price}</h1>
                                        </div>
                                        {/* <div className="float-right ">
                                            <h1>GST:18% </h1>
                                        </div> */}
                                    </div>
                                </div>
                                <hr />
                                <div className=" px-10 pt-5 pb-10">
                                    <div className="pb-7 flex justify-end ">
                                        <h1 className="pr-10 text-xl"><span className="font-bold text-xl">Total</span> : ₹{order.price}</h1>
                                    </div>
                                    <div className="flex justify-end"  >
                                        <button onClick={razorpay} className="rounded-sm text-white bg-yellow-500 cursor-pointer px-4 py-3 px-8 hover:bg-black hover:text-white-500 font-medium text-xl">
                                            PROCEED FOR PAYMENT
                                        </button>
                                    </div>
                                    {/* 
                                    <div className="flex justify-end"  >
                                        <NavLink to="/checkout" className="rounded-sm text-white bg-red-500 cursor-pointer px-4 py-3 px-8 hover:bg-black hover:text-white-500 font-medium text-xl">
                                            PROCEED FOR PAYMENT
                                        </NavLink>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>

        </React.Fragment>
    )
}

export default OrderDetails